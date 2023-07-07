// add the profile schema and export it 

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  biography: String,
  avatar: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;