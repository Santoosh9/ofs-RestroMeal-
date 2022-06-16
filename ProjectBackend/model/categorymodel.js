const mongoose= require('mongoose')


const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        require:true,
        trim:true
    } 
},
// createdAT
// updateAT
{timestamps:true})

module.exports= mongoose.model('Category', categorySchema)