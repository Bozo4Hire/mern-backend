const usersCtrl = {};
/* usersCtrl.getUsers = (req, res) => res.send('Users []')
usersCtrl.createUser = (req, res) => res.send('User created')
usersCtrl.deleteUser = (req, res) => res.send('User deleted') */

const User = require('../models/User');
usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}
usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    console.log(newUser);
    await newUser.save();
    res.json({message: 'User created'});
}
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}

module.exports = usersCtrl;
