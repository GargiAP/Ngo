const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {handleUserLogin,handleUserSignupNgo}=require('../controllers/userController')

router.post('/register-ngo', handleUserSignupNgo)
// Volunteer Registration Route
router.post('/register-volunteer', async (req, res) => {
  const { name, email, password, contact, address,age,gender } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
      contact,
      address,
      age,
      gender,
      role: 'volunteer',
    });

    await newUser.save();

    res.status(201).json({ message: 'Volunteer registered successfully!' });
  } catch (err) {
    console.error('Volunteer Registration error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post('/login',handleUserLogin );


module.exports = router;
