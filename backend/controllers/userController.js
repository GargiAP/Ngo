//Logic for user-related operations
const User = require('../models/User')
async function handleUserSignup(req,res) {
  const {name,email,age,contact,password} = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home");
}

module.exports = {
    handleUserSignup
};