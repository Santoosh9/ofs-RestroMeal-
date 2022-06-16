
const jwt = require('jsonwebtoken')//authebtication
// const expressJwt = require('express-jwt') //authorozation
const User = require('../model/registermodel') 

// to register user 
exports.userRegister = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user = await user.save()
    if (!user) {
        return res.status(400).join({ error: 'something went wrong' })
        
    }
    res.send(user)

//     User.findOne({email:user.email}, async(error, data)=>{
// if(data== null){
//     user= await user.save()
//     if(!user){
//         return res.status(400).join({ error: 'something went wrong' })
//     }
//     else{
//         res.send(user)
//     }
//     }
//     else{
//         return res.status(400).json({error:"email already exists"})
//     }
//     })
}


// login process
exports.login = async (req, res) => {
    const { email, password } = req.body

    // checking the email is register in a system or not
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ error: 'sorry this email not found in a system' })
    }

    // if email is register than chacking password
    if (!user.authenticate(password)) {
        return res.status(400).json({ error: ' email and password dosnot match' })
    }

    // // checking user is verify or not 
    // if (!user.isVerified) {
    //     return res.status(400).json({ error: 'vefify your email before login ' })

    // }

    // generate token with user id jwt serct

    const token = jwt.sign({ _id: user._id, user:user.role}, process.env.JWT_SECRET)

    // store token in cookie
    res.cookie('myCookie', token, { expire: Date.now() +999999 })

    // return user information in forntend
    const { _id, name,role} = user
    return res.json({ token, users: { _id, email, name, role } })

    // // logout

    // exports.Logout= (req, res)=> {
    //     res.clearCookies('myCookie')
    //     res.json({message: "Logut Sucessfully"})
    // }
}
