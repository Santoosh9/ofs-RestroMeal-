const mongoose= require('mongoose')


const adminSchema = new mongoose.Schema({
    food_name:{
        type:String,
        require:true,
        trim:true
    } 
},
// createdAT
// updateAT
{timestamps:true})

module.exports= mongoose.model('Admin', adminSchema)