const db = require('../dbConfig');

module.exports = {
    add
};

async function add(user) {
    const users = await db("users").insert(user, "id");
    console.log(users)
}

