const express = require('express');
const controller = require('../controllers/users.controller');
const apiKeyAuth = require('../utils/apiKeyAuth');
const roleAuth = require('../middleware/roleAuth');
const router = express.Router();


// Registro público (crea usuarios con role 'user')
router.post('/', controller.register);


// Rutas protegidas: lista usuarios (solo developer)
router.get('/', apiKeyAuth, roleAuth('developer'), controller.listUsers);
router.get('/:id', apiKeyAuth, roleAuth('developer'), controller.getById);


module.exports = router;