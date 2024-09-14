const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  inventory: { type: Array, default: [] }
});

module.exports = mongoose.model('User', userSchema);
