const db = require('../dbConfig');

module.exports = {
    add,
    findById
};

async function findById(id) {
    const [user] = await db("users").select("id", "username").where({ id })
    return user;
}

async function add(user) {
    const [users] = await db("users").insert(user, "id");
    return findById(users)
}
