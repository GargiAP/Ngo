const express = require('express');
const router = express.Router();
const User = require('../models/User');

// NGO Registration Route
router.post('/register-ngo', async (req, res) => {
  const { name, email, password, contact, address } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      contact,
      address,
      role: 'ngo',
    });


    // Save to DB
    await newUser.save();

    res.status(201).json({ message: 'NGO registered successfully!' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

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


module.exports = router;
