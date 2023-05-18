const mongoose = require('mongoose');
const Movie = require('../model/movie.model');
const route = require('express').Router();

route.post('/movies', async  (req, res)=> {
    Movie.create(req.body).then((data) => {
        res.status(201).json({
            message: 'Movie added successfully',
            data: data
        });
    });
});


module.exports = route;