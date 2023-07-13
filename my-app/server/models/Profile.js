
const mongoose = require('mongoose');

//Profile Schema
const userProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: String,
  title: String,
});

//Creates the profile model
const UserProfile = mongoose.model('UserProfile', userProfileSchema);

//Exports the profile model
module.exports = UserProfile;
