const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  message: { type: String, required: true }},
  {timestamps: true
});

const chatSchema = new Schema({
    chanName: {
      type: String,
      required: true
    },
    message: [messageSchema]},
    {timestamps: true
  });

  module.exports = mongoose.model('Chat', chatSchema);