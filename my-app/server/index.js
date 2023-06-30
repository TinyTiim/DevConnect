const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

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
            {headers: {"private-key": "8f7a053a-3d12-4e15-aece-f48d89860cd9"}}
        )
        return res.status(response.status).json(response.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

//project id 
// 78010dcf-ab80-48a2-9842-115d2c628ce4
//project key
// 8f7a053a-3d12-4e15-aece-f48d89860cd9

app.listen(3001);