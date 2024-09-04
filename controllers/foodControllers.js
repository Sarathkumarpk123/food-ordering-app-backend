const Food=require('../models/foodModel')

const getAllFood=async(req, res) => {
    const foods=await Food.find({});
    res.json(foods)
  }

 const getFoodById= async(req, res) => {
  const food=await Food.findById(req.params.foodId).exec();
  res.json(food)
  }
  
 const postFood=async(req, res) => {
  const data=req.body
  const food = new Food(data)
  await food.save()
  res.json(food)
 
  }

 const updateFood=async (req, res) => {
  const updatedfood=await Food.findByIdAndUpdate(req.params.foodId, req.body, {new:true})
  res.json(updatedfood)
  } 

 const deleteFood=async (req, res) => {
  await Food.findByIdAndDelete(req.params.foodId)
    res.send('Deleted')
  }
  
  module.exports={
    getAllFood,
    getFoodById,
    postFood,
    updateFood,
    deleteFood
  }