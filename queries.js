const database = require("./database-connection");

module.exports = {
    list() {
      return database('overwatch')
    },
    read(id) {
      return database('overwatch')
            .select('*')
            .where('id', id)
            .first();
    },
    create(player) {
      return database('overwatch')
            .insert(player)
            .returning('*')
            .then(player => player[0])
    },
    update(id, player) {
      return database('overwatch')
            .update(player)
            .where('id', id)
            .returning('*')
            .then(player => player[0])
    },
    delete(id) {
      return database('overwatch')
            .select('*')
            .where('id', id)
            .del()
    }
};
