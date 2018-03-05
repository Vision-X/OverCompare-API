const database = require("./database-connection");

module.exports = {
    list() {
      return database('saved_players')
    },
    read(id) {
      return database('saved_players')
            .select('*')
            .where('id', id)
            .first();
    },
    create(player) {
      return database('saved_players')
            .insert(player)
            .returning('*')
            .then(player => player[0])
    },
    update(id, player) {
      return database('saved_players')
            .update(player)
            .where('id', id)
            .returning('*')
            .then(player => player[0])
    },
    delete(id) {
      return database('saved_players')
            .select('*')
            .where('id', id)
            .del()
    }
};
