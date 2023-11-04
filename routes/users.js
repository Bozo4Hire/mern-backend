const { Router } = require('express');
const router = Router();

// Controller Invocation
const {getUsers, createUser, deleteUser} = require('../controllers/users.controller');
router.route('/')
    //.get((req, res) => res.send('Users Routes'))
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .delete(deleteUser)
module.exports = router;
