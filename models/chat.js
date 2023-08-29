const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
    messages: [messageSchema]},
    {timestamps: true
  });

  module.exports = mongoose.model('Chat', chatSchema);