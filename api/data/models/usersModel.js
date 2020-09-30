const db = require('../dbConfig');

module.exports = {
    add,
    findById,
    findByUsername,
};

async function findByUsername(username) {
    const [user] = await db("users").where({ username });
    return user;
}

async function findById(id) {
    const [user] = await db("users").select("id", "username").where({ id })
    return user;
}

async function add(user) {
    const [users] = await db("users").insert(user, "id");
    return findById(users)
}
