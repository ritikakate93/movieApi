const express = require('express');
const router = express.Router();

const movieSchema = require('../model/movieModel');

// Browse Movies by Genres
exports.searchMovieByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    // Retrieve movies by genre from the database
    const movies = await movieSchema.find({ genre: genre });
    res.send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

// Browse Movies by directoeres
exports.searchMovieByDirector = async (req, res) => {
  try {
    const director = req.query.director;

    // Retrieve movies based on search criteria from the database
    const movies = await movieSchema.find({ director: director });
    res.send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
}

// Search Movies by title
exports.searchMovieByTitle = async (req, res) => {
  try {
    const title = req.query.title;

    // Retrieve movies based on search criteria from the database
    const movies = await movieSchema.find({title: title});
    res.send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
}
