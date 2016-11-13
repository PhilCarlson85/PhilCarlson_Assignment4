
var express = require('express');
var router = express.Router();
var ctrlNotes = require('../controllers/notes');


router.get('/notes', ctrlNotes.notesListAll);
router.get('/notes/:id', ctrlNotes.notesRetrieveId);
router.post('/notes', ctrlNotes.notesCreate);
router.put('/notes/:id', ctrlNotes.notesUpdateId);
router.delete('/notes/:id', ctrlNotes.notesDeleteOne);

module.exports = router;
