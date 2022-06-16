const ctg= require('../model/categorymodel')

exports.categorycontrollerfunc=(req,res)=>{

    res.send('hello category controller');
}
// to post ctg
exports.postCategory = async(req, res)=>{
    let ctgg = new ctg({
        category_name: req.body.category_name
    })
    ctgg = await ctgg.save()
    if(!ctgg){
        return res.status(400).json({ error:'something wrong'})
    }
    res.send(ctgg)
}

// to view all category list 
exports.categoryList= async(req,res)=>{
    const ctgg= await ctg.find()
    if(!ctgg){
        return res.status(400).json({error:'somthing went wrong'})

    }
    res.send(ctgg)
}


