const express = require('express');
const router = express.Router();

const movieController = require('../controller/movieCon')

// Browse Movies by Genres
router.post('/',movieController.createMovie);

router.get('/', movieController.getMovie);

router.put('/', movieController.updateMovie);

router.delete('/', movieController.deleteMovie);

module.exports = router;

