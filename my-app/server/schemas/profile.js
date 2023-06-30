const Profile = require('./profile');
const userId = require('../models/userId');

// Add an event listener to the 'Edit Profile' button
//const name = document.getElementById
//const avatar = document.getElementById
//const avatar = document.getElementById
// Get the updated profile information 


   Profile.updateOne({ userId: userId }, { name: name, bio: bio, avatar: avatar })
  .then(() => {
    console.log('Profile updated successfully');
  })
  .catch((error) => {
    console.error('Error updating profile:', error);
  });