const mongoose = require('mongoose');

const userIdSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserID' }],
});

module.exports = mongoose.model('userId', userIdSchema);
