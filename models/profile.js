const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {type: String, required: true},
  born: Date,
  location: {type: String, required: true},
  likes: String,
  dislikes: String,
  faveBooks: String,
  faveMovies: String,
  faveMusic: String,
  faveQuote: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('Profile', profileSchema);