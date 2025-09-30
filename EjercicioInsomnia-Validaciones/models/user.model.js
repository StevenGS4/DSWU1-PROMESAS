const { randomUUID } = require("node:crypto");

let users = [
    { id: randomUUID(), name: "Gilmar", email: "gilmarsteven0@gmail.com", active: true, age: 22 },
    { id: randomUUID(), name: "Steve", email: "gilmarsteven0@gmail.com", active: true, age: 18 },
];

function findAll() {
    return users;
}

function findById(id) {
    return users.find((u) => u.id === id) || null;
}

function addUser(item) {
    const user = {
        id: randomUUID(),
        name: item.name,
        email: item.email,
        active: true,
        age: item.age
    };

    users.push(user);
    return user;
}

function updateUser(id, data) {
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) return null;

    users[index] = {
        ...users[index],
        name: typeof data.name === "undefined" ? users[index].name : data.name,
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        active: typeof data.active === "undefined" ? users[index].active : data.active,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age)
    };

    return users[index];
}

module.exports = {
    findAll,
    findById,
    addUser,
    updateUser
};
