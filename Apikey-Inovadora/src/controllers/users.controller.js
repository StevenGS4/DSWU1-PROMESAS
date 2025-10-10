const User = require('../models/user.model');


function register(req, res) {
const body = req.body;
if (!body.name || !body.email) return res.status(400).json({message: 'name and email required'});
// Always create general users via this route
const newUser = User.addUser(body, 'user');
res.status(201).json({message: 'Usuario registrado', user: {
id: newUser.id,
name: newUser.name,
email: newUser.email,
role: newUser.role,
apiKey: newUser.apiKey
}});
}


function listUsers(req, res) {
// Only developer should call this in production; middleware en routes lo restringe.
const data = User.findAll(req.query);
res.status(200).json(data);
}


function getById(req, res) {
const user = User.findById(req.params.id);
return user ? res.status(200).json(user) : res.status(404).json({message: 'Usuario no encontrado'});
}


module.exports = { register, listUsers, getById };