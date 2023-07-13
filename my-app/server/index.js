const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('./config/connection');
const UserProfile = require('./models/Profile');

const app = express();

//Middleware
app.use(express.json());
app.use(cors({ origin: true }));

//Authentication
app.post('/authenticate', async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          'private-key': '9dc4c3ed-a93d-4623-af28-2f1864811a3f',
        },
      }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res
      .status(error.response.status)
      .json(error.response.data);
  }
});

//Gets users profile endpoint
app.get('/api/userProfile/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const userProfile = await UserProfile.findOne({ username });
    if (userProfile) {
      res.status(200).json(userProfile);
    } else {
      res.status(404).json({ error: 'User profile not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

//Updates users profile endpoint
app.post('/api/updateProfile/:username', async (req, res) => {
  const username = req.params.username;
  const updatedProfile = req.body;

  try {
    await UserProfile.findOneAndUpdate({ username }, updatedProfile, {
      upsert: true,
    });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

//Starts server
app.listen(3001);
