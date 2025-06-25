//Logic for user-related operations
const User = require('../models/User')
const bcrypt = require('bcryptjs');

async function handleUserSignup(req,res) {
  const {name,email,age,contact,password} = req.body;
  await User.create({
    name,
    email,
    password,
    age,
    contact
  });
  return res.render("home");
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
   if(!email || !password)
   {
    return res.status(400).json({message:"email and password required"});
   }
   try{
   const user=await User.findOne({email});
   if(!email){
    return res.status(400).json({message:"email invalid"});
   }
   
   const isMatch=await bcrypt.compare(password,user.password);
   if(!isMatch){
    return res.status(400).json({message:"password invalid"})
   }
       res.status(200).json({ message: 'Login successful', user });
  }

  catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }

    return res.render("home");
}


module.exports = {
    handleUserSignup,handleUserLogin
};


