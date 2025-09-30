const User = require('../models/user.model');

// Obtener todos los usuarios
exports.findAll = (req, res) => {
  const data = User.findAll();
  res.status(200).json(data);
};

// Buscar usuario por id
exports.findById = (req, res) => {
  const { id } = req.params;
  const data = User.findById(id);

  if (!data) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.status(200).json(data);
};

// Agregar usuario nuevo
exports.addUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'Los campos name, email y age son obligatorios' });
  }

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "El nombre no puede estar vacío" });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "El email no tiene un formato válido" });
  }

  if (isNaN(age) || age <= 0) {
    return res.status(400).json({ message: "La edad debe ser un número positivo" });
  }

  const createdUser = User.addUser({ name, email, age: Number(age) });
  res.status(201).json(createdUser);
};

// Actualizar usuario
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age, active } = req.body;

  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return res.status(400).json({ message: "El nombre no puede estar vacío" });
  }

  if (email !== undefined && !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "El email no tiene un formato válido" });
  }

  if (age !== undefined && (isNaN(age) || age <= 0)) {
    return res.status(400).json({ message: "La edad debe ser un número positivo" });
  }

  const updatedUser = User.updateUser(id, { name, email, age, active });

  if (!updatedUser) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.status(200).json(updatedUser);
};
