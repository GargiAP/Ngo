const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  contact: String,
  gender: String,
  address: String,
  medical: String,
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
}, { timestamps: true });

module.exports = mongoose.model("Volunteer", volunteerSchema);
