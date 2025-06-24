const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);