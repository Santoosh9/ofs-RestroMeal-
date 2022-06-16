const mongoose= require('mongoose')
// const uuidv1 = require('uuidv1')
// const crypto=require('crypto')


const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true 
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim: true 
    },
    role:{
        type:Number,
        default:0
    },
    password:{
        type:String,
        required: true,
        trim: true 
    },
    // to store randome string
    salt:String,
          
    // Verified users before login 
    // isVerified:{
    //     type:Boolean,
    //     default: false
    // }

},{timestamps:true})


// Virtual felds
// authSehema.virtual('password')
// .set(function(passwords){
//     this._password= passwords
//     this.salt=uuidv1()
//     this.password= this.encryptPassword(passwords)
// })
// .get(function(){
//     return this._password
// })




// // defining methord


authSchema.methods={
    authenticate: function(plainText){
        return (plainText=== this.password ? true:false)
    },
   

    // encryptPassword: function(password){
    //     if(!password) return ''

    //     try{
    //         return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    //     }
    //     catch(error){
    // return ''
    //     }
    // }
}


// collection
module.exports=mongoose.model('Register', authSchema)


