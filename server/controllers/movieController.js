const models = require('../models/movieModel');

const movieController = {};

movieController.addMovie = (req, res, next) => {
    const { title } = req.body;
    models.Movie.create({title: title})
        .then(data => {
            console.log(data)
            res.locals.moviesList = data;
            return next();
        })
        .catch(err => {
            return next({
              log: `${err}`,
              message: { err: 'Error adding movie.' }
            });
        });
}

movieController.deleteMovie = (req, res, next) => {
    const { movieName } = req.body;
    console.log(`we are here ${movieName}`)

    models.Movie.deleteOne({title: movieName}).exec()
      .then(data => {
        console.log('Movie deleted from database.');
        return next();
      })
      .catch(err => {
        return next({
          log: `${err}`,
          message: { err: 'Error deleting movie.' }
        });
      });
  };


module.exports = movieController;
