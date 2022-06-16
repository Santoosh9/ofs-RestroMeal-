
exports.userValidation=(req, res,next)=>{
    req.check('name', 'Name is Requried').notEmpty()
    req.check('email', 'Email is Requried').notEmpty()
    .isEmail()
    .withMessage('Email format invalid')
    req.check('password', 'password is requried').notEmpty()
    .isLength({min:5, max:30})
    .withMessage('password must be between 5 and 30 words')
    const errors= req.validationErrors()

    if(errors){
        const showerror=errors.map(err=> err.msg)
        return res.status(400).json({error:showerror})

    }
    next()
}