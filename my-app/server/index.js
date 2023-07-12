const express = require("express");
const mongoose = require('./config/connection');
const cors = require("cors");
const { default: axios } = require("axios");
const UserProfile = require('./models/Profile');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
//   return res.json({ username: username, secret: "sha256..." });

    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "9dc4c3ed-a93d-4623-af28-2f1864811a3f"}}
        )
        return res.status(response.status).json(response.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

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

//project id 
// 52a95cce-d78f-4c16-ac34-c48d03d414f4
//project key
// 9dc4c3ed-a93d-4623-af28-2f1864811a3f

app.listen(3001);