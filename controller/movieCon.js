const movieSchema = require('../model/movieModel');
const movieData = require('../middleware/movieApi');

exports.createMovie = async (req, res) => {
    try {
        const title = req.body.title;

        // Assume movieGet returns a Promise that resolves to a movie object
        const movie = await movieData.movieGet(title);

        if (!movie) {
            return res.status(404).send({ message: "Movie not found" });
        }

        // Save the movie to the database
        await movie.save();

        res.status(201).send({ movie });
    } catch (error) {
        console.error("Error creating movie:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

exports.getMovie = async (req, res) => {
    try {
        if(!req.query.id){
            const movies = await movieSchema.find({})
            res.send(movies)
        }else{
            const movie = await movieSchema.findById(req.query.id)

            if (!movie) {
                return res.status(404).send()
            }
    
            res.send(movie)
        }
    } catch (e) {
        res.status(500).send()
    }
}

exports.updateMovie = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Data to update cannot be empty" });
        }

        const id = req.query.id;

        // First, use async/await to update the movie
        const updatedMovie = await movieSchema.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false,
            new: true, // Return the updated document
        });

        if (!updatedMovie) {
            return res.status(404).send({ message: `Cannot update movie with ID ${id}. Movie not found!` });
        }
        
        res.send(updatedMovie);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await movieSchema.findByIdAndDelete(req.query.id);

        if (!movie) {
            return res.status(404).send({ message: 'Movie not found' });
        }

        res.status(200).send({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
};
