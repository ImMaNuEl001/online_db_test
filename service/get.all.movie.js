
const route = require('express').Router();
const Movie = require('../model/movie.model');


route.get('/movies',  (req, res)=> {
    Movie.find({}).then(data => res.status(200).json({
        message: 'Movies fetched successfully',
        data: data
    }));
});


module.exports = route;