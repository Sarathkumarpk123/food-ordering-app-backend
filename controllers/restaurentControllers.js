const Restaurent=require('../models/restaurentModel')

const getAllRestaurent=async(req, res) => {
    const restaurents=await Restaurent.find({});
    res.json(restaurents)
  }

 const getRestaurentById= async(req, res) => {
  const restaurent=await Restaurent.findById(req.params.restaurentId).exec();
  res.json(restaurent)
  }
  
 const postRestaurent=async(req, res) => {
  const data=req.body
  const restaurent = new Restaurent(data)
  await restaurent.save()
  res.json(restaurent)
 
  }

 const updateRestaurent=async (req, res) => {
  const updatedrestaurent=await Restaurent.findByIdAndUpdate(req.params.restaurentId, req.body, {new:true})
  res.json(updatedrestaurent)
  } 

 const deleteRestaurent=async (req, res) => {
  await Restaurent.findByIdAndDelete(req.params.restaurentId)
    res.send('Deleted')
  }
  
  module.exports={
    getAllRestaurent,
    getRestaurentById,
    postRestaurent,
    updateRestaurent,
    deleteRestaurent
  }