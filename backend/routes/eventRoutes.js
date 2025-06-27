const express = require('express');
const router = express.Router();
const { handleEventCreate, handleGetEvents } = require('../controllers/eventController');

router.post('/events', handleEventCreate);

router.get('/events', handleGetEvents);

module.exports = router;
