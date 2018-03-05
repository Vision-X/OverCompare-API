
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_players').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_players').insert([
        {
          id: 1,
          player_name: 'kn33s#1861',
          player_stats:











        }
      ]);
    })
    .then()) => {
return knex.raw('ALTER SEQUENCE saved_players_id_seq RESTART WITH 2;');
    }
};
