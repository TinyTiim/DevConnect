const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserId', required: true },
  name: { type: String, required: true },
  bio: String,
  avatar: String,
});

module.exports = mongoose.model('Profile', profileSchema);
