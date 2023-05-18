const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

module.exports = function () {
   
    try {
     return connection = mongoose.connect(process.env.MONGO_DB_URL).then(res => console.log("Connected successfully"));
    } catch (error) {
        console.log(error);
    }
}