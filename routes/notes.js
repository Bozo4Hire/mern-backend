const { Router } = require('express');
const router = Router();

// Controller
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');


router.route('/')
    /* .get((req, res) => res.send('GET - Notes Routes'))
    .post((req, res) => res.send('POST - Notes Routes')) */

    /* .get((req, res) => res.json({message: 'GET Request'}))
    .post((req, res) => res.json({message: 'POST Request'})) */

    /* .get((req, res) => res.json({message: []}))
    .post((req, res) => res.json({message: 'Note Saved'})) */

    // With Controllers: 
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    /* .get((req, res) => res.json({title: 'Texto cualquiera'}))
    .put((req, res) => res.json({message: 'Note Updated'}))
    .delete((req, res) => res.json({message: 'Note Deleted'})) */
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;
