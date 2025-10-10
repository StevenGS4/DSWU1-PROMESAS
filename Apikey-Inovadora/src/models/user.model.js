const { randomUUID } = require('node:crypto');

let users = [
  // Seed developer user (role: developer)
  {
    id: randomUUID(),
    name: 'DevUser',
    email: 'dev@studio.local',
    age: 30,
    active: true,
    role: 'developer',
    apiKey: 'DEVELOPER-API-KEY-PLACEHOLDER-0001'
  },
  // Usuarios normales con API keys estáticas
  {
    id: randomUUID(),
    name: 'Steven',
    email: 'steven@example.com',
    age: 25,
    active: true,
    role: 'user',
    apiKey: 'USER-API-KEY-STEVEN-0002'
  },
  {
    id: randomUUID(),
    name: 'Gilmar',
    email: 'gilmar@example.com',
    age: 28,
    active: true,
    role: 'user',
    apiKey: 'USER-API-KEY-GILMAR-0003'
  },
  {
    id: randomUUID(),
    name: 'Kevin',
    email: 'kevin@example.com',
    age: 22,
    active: true,
    role: 'user',
    apiKey: 'USER-API-KEY-KEVIN-0004'
  }
];

function addUser(item, role = 'user') {
  const user = {
    id: randomUUID(),
    name: item.name,
    email: item.email,
    age: item.age || null,
    active: typeof item.active === 'undefined' ? true : Boolean(item.active),
    role: role, // by default 'user'
    apiKey: randomUUID() // sigue siendo aleatoria para usuarios nuevos
  };
  users.push(user);
  return user;
}

function findByApiKey(apiKey) {
  return users.find(u => u.apiKey === apiKey) || null;
}

function findAll(filter = {}) {
  let result = users;
  if (filter.name) {
    const q = String(filter.name).toLowerCase();
    result = result.filter(u => u.name.toLowerCase().includes(q));
  }
  if (filter.role) {
    result = result.filter(u => u.role === filter.role);
  }
  return result;
}

function findById(id) {
  return users.find(u => u.id === id) || null;
}

module.exports = {
  addUser,
  findByApiKey,
  findAll,
  findById
};
