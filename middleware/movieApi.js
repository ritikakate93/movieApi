const axios = require('axios');

const movieSchema = require('../model/movieModel');

exports.movieGet = async (title) => {
    const apiUrl = `${process.env.MOVIE_APIURL}t=${title}&apikey=${process.env.MOVIE_APIKEY}`;
   
    try {
        const response = await axios.get(apiUrl);
        const movie = response.data;
        // console.log('===>',response.data);
        const movie1 = {
            title : movie.Title,
            genre : movie.Genre.split(',')[0],
            year : movie.Year,
            releaseDate: movie.Released,
            director : movie.Director,
            actors: movie.Actors,
            rating : movie.imdbRating ,
            duration : movie.Runtime.split(' ')[0],
            description : movie.Plot,
            country: movie.Country.split(',')[0],
            language: movie.Language.split(',')[0],
        }
        const movieSave = new movieSchema(movie1);
        return movieSave;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movie data movie not found');
      }

}
