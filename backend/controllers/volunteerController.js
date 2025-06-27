const Volunteer = require('../models/Volunteer'); 

async function handleVolunteerRegister(req, res) {
  const { name, email, age, contact, gender, address, medical } = req.body;

  try {
    const existingVolunteer = await Volunteer.findOne({ email });

    if (existingVolunteer) {
      return res.status(400).json({ message: "Volunteer already registered" });
    }

    const newVolunteer = await Volunteer.create({
      name,
      email,
      age,
      contact,
      gender,
      address,
      medical
    });

    res.status(201).json({ message: "Volunteer registered successfully", volunteer: newVolunteer });
  } catch (err) {
    console.error("Volunteer registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
}

module.exports = { handleVolunteerRegister };
