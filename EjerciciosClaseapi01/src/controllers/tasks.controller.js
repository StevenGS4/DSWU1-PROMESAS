const Task = require('../models/task.model');

exports.findAll = (req, res) => {
  const data = Task.findAll();
  res.status(200).json(data);
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'El título es obligatorio' });
  }

  const createdTask = Task.addTask(title); 
  res.status(201).json(createdTask);
};

exports.removeTask = (req, res) => {
  const { id } = req.params;
  const ok = Task.removeTask(id);
  if (!ok) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  res.status(200).json({ message: 'Tarea eliminada' });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const updated = Task.actualizarTask(id, title);
  if (!updated) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  res.status(200).json(updated);
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  const task = Task.consultarTask(id); 

  if (!task) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  res.status(200).json(task);
};

exports.completeTask = (req, res) => {
  const { id } = req.params;
  const task = Task.completedTask(id);

  if (!task) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  res.status(200).json(task);
};
