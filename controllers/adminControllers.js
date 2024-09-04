const Admin=require('../models/adminModel')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getAllAdmin=async(req, res) => {
    const admins=await Admin.find({});
    res.json(admins)
  }

 const getAdminById= async(req, res) => {
  const admin=await Admin.findById(req.params.adminId).exec();
  res.json(admin)
  }
  
 const adminSignup = async (req, res) => {
    const { name,email,password,mobile } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const admin = new Admin({name,email,password: hashedPassword,mobile});
        
           
    await admin.save();
    
    res.json({success: true,message:"admin created successfully"});
};


  const updateAdmin=async (req, res) => {
    const updatedadmin=await Admin.findByIdAndUpdate(req.params.adminId, req.body, {new:true})
    res.json(updatedadmin)
    } 
  
   const deleteAdmin=async (req, res) => {
    await Admin.findByIdAndDelete(req.params.adminId)
      res.send('Deleted')
    }
    
    module.exports={
      getAllAdmin,
      getAdminById,
      adminSignup,
      updateAdmin,
      deleteAdmin
    }