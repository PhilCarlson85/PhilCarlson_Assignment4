var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

/* GET 'Notes List' page */
var renderNotelist = function(req, res, responseBody){
    res.render('notes-list', {
        title: 'Notes List',
        notes: responseBody});
};
module.exports.noteList = function(req, res) {
    var requestOptions, path;
    path = '/api/notes';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {},
        qs: {}
    };
    request(
        requestOptions,
        function (err, response, body) {
            renderNotelist(req, res, body);
        }
    );
};

/* GET 'Sign-In' page */
module.exports.signIn = function(req, res) {
    res.render('index', { title: 'Login' });
};

/* GET 'Note Editor' page */
module.exports.addNote = function(req, res) {
    res.render('note-editor-form', {title: 'Note Editor'});
};

/* GET 'Note Editor' page */
module.exports.notesPage = function(req, res) {
    res.render('notes-page', {title: 'Notes...'});
};