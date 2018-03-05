const knex = require("./database-connection");

module.exports = {
    list() {
      return knex('saved_players')
    },
    read(id) {
      return knex('saved_players')
            .select('*')
            .where('id', id)
            .first();
    },
    create(player) {
      return knex('saved_players')
            .insert(player)
            .returning('*')
            .then(player => player[0])
    },
    update(id, player) {
      return knex('saved_players')
            .update(player)
            .where('id', id)
            .returning('*')
            .then(player => player[0])
    },
    delete(id) {
      return knex('saved_players')
            .select('*')
            .where('id', id)
            .del()
    }
};
