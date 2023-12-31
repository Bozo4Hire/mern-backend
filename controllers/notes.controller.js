const notesCtrl = {};

const Note = require('../models/Note');
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};
//notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    console.log(newNote);
    await newNote.save();
    res.json({message: 'Note Saved'});
};
//notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved'});

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note);
};
//notesCtrl.getNote = (req, res) => res.json({title: 'Texto cualquiera'});

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Note Updated'});
};
//notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'});

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
};
//notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'});

module.exports = notesCtrl;
