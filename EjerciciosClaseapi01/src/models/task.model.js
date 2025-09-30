
const { randomUUID } = require("node:crypto");

let tasks = [
  { id: randomUUID(), title: "Aprender API REST", completed: false },
  { id: randomUUID(), title: "Utilizar el MVD en API Rest", completed: false }
];

function findAll() {
  return tasks;
}

function addTask(title) {
  const task = {
    id: randomUUID(),
    title: title,
    completed: false
  };

  tasks.push(task);
  return task;
}


function removeTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}

function actualizarTask(id, newTitle) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  task.title = newTitle;
  return task;
}

function consultarTask(id) {
  return tasks.find(t => t.id === id) || null;
}

function completedTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  task.completed = true;
  return task;
}

module.exports = {
  findAll,
  addTask,
  removeTask,
  actualizarTask,
  consultarTask,
  completedTask
};

