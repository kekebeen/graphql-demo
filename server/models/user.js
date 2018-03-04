const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: { type: String },
  createdAt: { type: Date, 'default': Date.now, index: true },
  updatedAt: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('User', userSchema);