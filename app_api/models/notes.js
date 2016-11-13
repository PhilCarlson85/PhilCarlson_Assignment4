var mongoose = require( 'mongoose' );
var noteSchema = new mongoose.Schema({
    title: String,
    contents: String,
    note_id: Number,
});

mongoose.model('Notes', notesSchema);
