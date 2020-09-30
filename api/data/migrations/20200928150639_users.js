
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("id")
      tbl.text("username").unique().notNullable()
      tbl.text("password").notNullable()
      tbl.text("name")
  }).createTable("status", tbl => {
    tbl.increments("id")
    tbl.string("ticker")
    tbl.float("delta")
    tbl.float("profit")
    tbl.float("current_price")
    tbl.float("orig_price")
    tbl.float("quantity")
    tbl.float("mark")
    tbl.string("strike_str")
    tbl.integer("order_id")
    tbl.timestamp("time_run").defaultTo(knex.fn.now(6))
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
