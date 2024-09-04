const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin=async(req, res) => {
    //1.GETTING EMAIL AND PASSWORD simple way is object destructuring eg. const{email,password}=req.body
    const { email,password } = req.body;
    //2.checking email id already exist or not
    const user=await User.findOne({ email}).exec();
    if(!user){
        return  res.status(404).json({success:false,message:"Unauthorised acces"});
    }
    //3.checking wheather password is correct
    const passwordMatch=bcrypt.compareSync(password, user.password);
    //4.user log in
    if(!passwordMatch){
        const token = jwt.sign({id:user.id,name:user.name,email:user.email }, '61b19ed193347d3a3c2b056ca3cf0af8639cea06a78ab8cb8c03a66f81c725634de8db004b5404e2f2418eae68f34b8ab1b1763a4a0cc2dcfd8a9a0dfc163719');
        res.cookie("token",token);
        res.json({success:true,message:"Logged in"});
    }
    else{
      return res.status(401).send
      ("Unauthorised access")
        
    }
}

     
    module.exports={
      
      userLogin
      
    }