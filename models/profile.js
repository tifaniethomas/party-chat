const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {type: String, required: true},
  born: Date,
  location: {type: String, required: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);