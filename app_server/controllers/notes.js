/**
 * Created by Phil on 10/16/16.
 */

/* GET 'Notes List' page */
module.exports.noteList = function(req, res) {
    res.render('notes-list', { title: 'Notes List' });
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