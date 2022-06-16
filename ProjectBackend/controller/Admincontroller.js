const food= require('../model/Adminmodel')
// to add new food items 
exports.AdminRoutes = async(req, res)=>{
    
        let foods = new food({
            food_name: req.body.food_name
        })
        foods = await foods.save()
        if(!foods){
            return res.status(400).json({ error:'something wrong'})
        }
        res.send(foods)
    
}

//to view all foods list 
exports.foodList= async(req,res)=>{
    const foods= await food.find()
    if(!foods){
        return res.status(400).json({error:'somthing went wrong'})

    }
    res.send(foods)
}

