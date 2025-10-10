const express = require('express');
const userRoutes = require('./routes/users.routes');
const movieRoutes = require('./routes/movies.routes');
const app = express();
app.use(express.json());


app.get('/', (req, res) => res.status(200).json({status: 'ok', name: 'Movies API by Genre'}));

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));