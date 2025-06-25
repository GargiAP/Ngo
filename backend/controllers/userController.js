//Logic for user-related operations
const User = require('../models/User')
const bcrypt = require('bcryptjs');

//signup logic for ngo
async function handleUserSignupNgo(req,res) {
  const {name,email,contact,password,address} = req.body;
try{
const existingUser = await User.findOne({ email });
  if(existingUser){
    return res.status(400).json({message:"user already exists"});
  }
  

  /*Either this method or dierectly use user.create coz it does both creating and saving 
  const newUser = new User({
      name,
      email,
      password,
      contact,
      address,
      role: 'ngo',
    });


  await newUser.save();*/

  await User.create({
    name,
    email,
    password,
    contact,
    address,
    role: "ngo"
  });
  res.status(201).json({message:"NGO registered succesfully yayy"});
}catch(err){
  console.error(err)
  res.status(500).json({message:"server error"});

}
  //return res.render("home");
}

//signup logic for volunteer
async function handleUserSignupVolunteer (req,res){
  const{name,email,contact,password,address,age,gender} = req.body;
  try{
    const userexists=await User.findOne({email});
    if(userexists){
      return res.status(500).json({message: "user exists"});
    }
    await User.create({
    name,
    email,
    password,
    contact,
    age,
    gender,
    address,
    role: "volunteer"
    })
    res.status(201).json({message:"volunteer registered successfully yaayy"});
  }catch(err){
    console.error(err);
    res.status(500).json({message:"server error sryyy"});

  }
}


//login logic for volunteer and ngo
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

   // return res.render("home");
}


module.exports = {
    handleUserSignupNgo,handleUserLogin,handleUserSignupVolunteer
};


