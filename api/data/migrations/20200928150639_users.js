
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("id")
      tbl.text("username").unique().notNullable()
      tbl.text("password").notNullable()
      tbl.text("name")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
