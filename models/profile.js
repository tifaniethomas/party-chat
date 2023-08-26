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
  likes: String,
  dislikes: String,
  faveBooks: String,
  faveMovies: String,
  faveMusic: String,
  faveQuote: String,
}, {
  timestamps: true
})

// schema.path('userName').validate(function (v) {
//     return v.length > 10;
//   }, 'my error type'); 

module.exports = mongoose.model('Profile', profileSchema);