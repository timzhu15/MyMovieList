const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();


router.get('/',
    (req, res) => res.status(200).json(res.locals.moviesList)
);

router.post('/', 
    movieController.addMovie,
    (req, res) => res.status(200).json(res.locals.moviesList)
);

router.delete('/', 
    movieController.deleteMovie,
    (req, res) => res.status(200).json()
);

module.exports = router;