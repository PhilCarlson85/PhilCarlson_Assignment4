var express = require('express');
var router = express.Router();
var ctrlNotes = require('../controllers/Notes');

/* Notes pages */
router.get('/noteList', ctrlNotes.noteList);
router.get('/index', ctrlNotes.signIn);
router.get('/addNote', ctrlNotes.addNote);
router.get('/notesPage', ctrlNotes.notesPage);

module.exports = router;
