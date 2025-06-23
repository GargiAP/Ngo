const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  contact: {
    type: String,
    required: [true, "Contact is required"],
    match: [/^\d{10}$/, "Contact must be a 10-digit number"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  age: {
    type: String,
    required: function () {
    return this.role === 'volunteer';
  }
  },
  gender: {
    type: String,
    required: function () {
    return this.role === 'volunteer';
  }
  },
  role: {
    type: String,
    enum: ["ngo", "volunteer"],
    required: true,
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", userSchema);
