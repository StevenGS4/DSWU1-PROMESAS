const express = require('express');
const controller = require('../controllers/movies.controller');
const apiKeyAuth = require('../utils/apiKeyAuth');
const roleAuth = require('../middleware/roleAuth');
const router = express.Router();


// Lecturas públicas protegidas por API Key (users y developers pueden leer)
router.get('/', apiKeyAuth, controller.listMovies); // query ?genre=Comedy
router.get('/:id', apiKeyAuth, controller.getMovie);


// Creación/actualización/eliminación -> solo role 'developer'
router.post('/', apiKeyAuth, roleAuth('developer'), controller.createMovie);
router.put('/:id', apiKeyAuth, roleAuth('developer'), controller.updateMovie);
router.delete('/:id', apiKeyAuth, roleAuth('developer'), controller.removeMovie);


// Endpoint de integración con otras APIs (solo developer)
router.post('/import/external', apiKeyAuth, roleAuth('developer'), controller.importFromExternal);


module.exports = router;