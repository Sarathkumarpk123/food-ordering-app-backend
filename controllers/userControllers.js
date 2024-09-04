const User=require('../models/userModel')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getAllUser=async(req, res) => {
    const users=await User.find({});
    res.json(users)
  }

 const getUserById= async(req, res) => {
  const user=await User.findById(req.params.userId).exec();
  res.json(user)
  }
  
 const userSignup = async (req, res) => {
    const { name,email,password,mobile } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({name,email,password: hashedPassword,mobile});
        
           
    await user.save();
    
    res.json({success: true,message:"user created successfully"});
};


  const updateUser=async (req, res) => {
    const updateduser=await User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    res.json(updateduser)
    } 
  
   const deleteUser=async (req, res) => {
    await User.findByIdAndDelete(req.params.userId)
      res.send('Deleted')
    }
    
    module.exports={
      getAllUser,
      getUserById,
      userSignup,
      updateUser,
      deleteUser
    }