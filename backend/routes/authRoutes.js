const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {handleUserLogin,handleUserSignupNgo, handleUserSignupVolunteer}=require('../controllers/userController');

//route for ngo signup
router.post('/register-ngo', handleUserSignupNgo);

//route for volunteer signup
router.post('/register-volunteer', handleUserSignupVolunteer);

//route for ngo and volunteer signup
router.post('/login',handleUserLogin );


module.exports = router;
