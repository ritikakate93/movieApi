const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true ,unique: true},
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  releaseDate: { type: String, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
  rating: { type: String, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true},
  language: { type: String, required: true },
},{ timestamps: true });

module.exports =   mongoose.model('Movie', movieSchema);