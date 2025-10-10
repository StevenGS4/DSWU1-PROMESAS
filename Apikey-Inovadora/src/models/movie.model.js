const { randomUUID } = require('node:crypto');

const movies = []; // aquí guardas tus películas en memoria

function findAll(filter = {}) {
  let result = movies; // este es el arreglo que vas a filtrar

  if (filter.genre) {
    const q = String(filter.genre).toLowerCase();
    result = result.filter(m => m.genre.toLowerCase() === q || m.genre.toLowerCase().includes(q));
  }

  if (filter.title) {
    const q = String(filter.title).toLowerCase();
    result = result.filter(m => m.title.toLowerCase().includes(q));
  }

  return result;
}

function findById(id) {
  return movies.find(m => m.id === id) || null;
}

function addMovie(data) {
  const movie = {
    id: randomUUID(),
    title: data.title,
    year: Number(data.year) || null,
    rating: data.rating || 'NR',
    genre: data.genre || 'Unknown',
    studio: data.studio || null,
    duration: Number(data.duration) || null,
    director: data.director || null,
    synopsis: data.synopsis || null
  };
  movies.push(movie);
  return movie;
}

function updateMovie(id, data) {
  const idx = movies.findIndex(m => m.id === id);
  if (idx === -1) return null;
  movies[idx] = {
    ...movies[idx],
    title: typeof data.title === 'undefined' ? movies[idx].title : data.title,
    year: typeof data.year === 'undefined' ? movies[idx].year : Number(data.year),
    rating: typeof data.rating === 'undefined' ? movies[idx].rating : data.rating,
    genre: typeof data.genre === 'undefined' ? movies[idx].genre : data.genre,
    studio: typeof data.studio === 'undefined' ? movies[idx].studio : data.studio,
    duration: typeof data.duration === 'undefined' ? movies[idx].duration : Number(data.duration),
    director: typeof data.director === 'undefined' ? movies[idx].director : data.director,
    synopsis: typeof data.synopsis === 'undefined' ? movies[idx].synopsis : data.synopsis
  };
  return movies[idx];
}

function deleteMovie(id) {
  const idx = movies.findIndex(m => m.id === id);
  if (idx === -1) return false;
  movies.splice(idx, 1);
  return true;
}

module.exports = {
  findAll,
  findById,
  addMovie,
  updateMovie,
  deleteMovie
};
