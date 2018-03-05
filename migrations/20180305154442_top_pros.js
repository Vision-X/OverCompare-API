exports.up = function(knex, Promise) {
  return knex.schema.createTable('top_pros', table => {
    table.increments('id').primary()
    table.text('player_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('top_pros')
};
