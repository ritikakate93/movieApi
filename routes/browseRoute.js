const express = require('express');
const router = express.Router();

const browseController = require('../controller/browseCon')

// Browse Movies by Genres
router.get('/genres/',browseController.searchMovieByGenre);

router.get('/director/', browseController.searchMovieByDirector);

router.get('/title', browseController.searchMovieByTitle);


module.exports = router;

