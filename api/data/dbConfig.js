const knex = require("knex");
const config = require("../knexfile");
const { dbEnv } = require("../config");

module.exports = knex(config[dbEnv]);