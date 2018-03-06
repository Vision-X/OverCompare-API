
exports.seed = function(knex, Promise) {
  return knex('top_pros').del()
    .then(function () {
      // Inserts seed entries
      return knex('top_pros').insert([
        {
          id: 1,
          player_name: 'JJonak#3163'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE top_pros_id_seq RESTART WITH 2;')
    })
};
