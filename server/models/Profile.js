const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  username: String,
  bio: String,
  avatar: String,
  title: String,
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
