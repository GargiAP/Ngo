const Event=require('../models/Events');

async function handleEventCreate(req,res){
const { title, description, venue, date, time, image } = req.body;
   try{
     await Event.create({ title, description, venue, date, time, image });
     res.status(201).json({ message: "Event created successfully", Event});
    }catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating event" });
  }
}

async function handleGetEvents(req, res) {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json({ events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching events" });
  }
}

module.exports = {
  handleEventCreate, handleGetEvents};
