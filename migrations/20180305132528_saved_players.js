exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved_players', table => {
    table.increments('id').primary()
    table.text('player_name')
    // table.json('player_stats')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('saved_players')
};
