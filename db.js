const mongoose = require('mongoose');
require('dotenv').config();

// define the mongoose connection URL
const mongoURL = process.env.Mongo_url;
// const mongoURL = 'mongodb://localhost:27017/hotels'

// setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// get default connection
// mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection;

//define event listeners, when event occur it will give messages
db.on('connected', () => {
    console.log("connected to MOngoDB Server");
});
db.on('error', (err) => {
    console.log("error in MongoDB Server", err);
});
db.on('disconnected', () => {
    console.log("Disconnected to MOngoDB Server");
});

//export the database connection
module.exports = db;