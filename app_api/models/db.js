//Page 125 of MEAN Book

var mongoose = require( 'mongoose' );
var gracefulShutdown;
/* VERIFY THIS CONNECTION: Need to make sure you have the right URI linked through this page and app.js */
var dbURI = 'mongodb://localhost/test';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function () {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' +msg);
        callback();
    });
};

//for Nodemon resarts (these are from pg 128 example)

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    gracefulShutdown('AWS app shutdown', function() {
        process.exit(0);
    });
});


//Check into this so that the naming is correct (in the book it was ./locations)
require('./notes');
