const express = require('express');
const db = require('./db/mongodb');
require('dotenv').config();
const route = require('./service/add.new.movie');
const getRoute = require('./service/get.all.movie');
const cors = require('cors');

app = express();

app.use(express.json());
PORT = process.env.PORT || 3000;

// order req and res and next
app.get('/api', (req, res) => {
    res.send('Welcome!!!, get your movie api by adding a /movies to your code');
});

app.use(cors());
app.use('/api', route);
app.use('/api', getRoute);

db().then(()=> {
    app.listen(PORT, ()=> {
        console.log('listening on http://localhost:'+ PORT);
    });

}).catch(err => {console.log(err);})