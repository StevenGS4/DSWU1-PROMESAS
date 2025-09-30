const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the User API" });
});

app.use("/api/users", userRoutes);

// Middleware global de errores (opcional, pero recomendado)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Error interno del servidor" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
