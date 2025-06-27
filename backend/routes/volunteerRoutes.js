const express = require('express');
const router = express.Router();
const { handleVolunteerRegister } = require('../controllers/volunteerController');

router.post('/volunteer/register', handleVolunteerRegister);

module.exports = router;
