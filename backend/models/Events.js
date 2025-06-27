const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
title: String,
  description: String,
  venue: String,
  date: String,
  time: String,
  image: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
}, { timestamps: true });

module.exports=mongoose.model('Event',eventSchema);