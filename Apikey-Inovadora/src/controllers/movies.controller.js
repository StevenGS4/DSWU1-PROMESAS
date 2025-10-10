const Movie = require('../models/movie.model');


function listMovies(req, res) {
// Búsqueda por query string: ?genre=Comedy ó ?title=Risas
const data = Movie.findAll(req.query);
res.status(200).json(data);
}


function getMovie(req, res) {
const movie = Movie.findById(req.params.id);
return movie ? res.status(200).json(movie) : res.status(404).json({message: 'Pelicula no encontrada'});
}


function createMovie(req, res) {
const payload = req.body;
if (!payload.title || !payload.genre) return res.status(400).json({message: 'title and genre required'});
const m = Movie.addMovie(payload);
res.status(201).json({message: 'Pelicula creada', movie: m});
}


function updateMovie(req, res) {
const m = Movie.updateMovie(req.params.id, req.body);
return m ? res.status(200).json(m) : res.status(404).json({message: 'Pelicula no encontrada'});
}


function removeMovie(req, res) {
const ok = Movie.deleteMovie(req.params.id);
return ok ? res.status(200).json({message: 'Pelicula eliminada'}) : res.status(404).json({message: 'Pelicula no encontrada'});
}


// Placeholder for external integration: importar datos de otras APIs (implementación simple)
async function importFromExternal(req, res) {
// Ejemplo: permitir a developer importar desde un servicio externo (placeholder)
// Aquí solo devolvemos un mensaje simulando la integración.
return res.status(200).json({message: 'Integración con API externa - endpoint de ejemplo (implement real call here)'});
}


module.exports = { listMovies, getMovie, createMovie, updateMovie, removeMovie, importFromExternal };