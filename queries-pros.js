const knex = require("./database-connection");

module.exports = {
list() {
  return knex('top_pros')
},
read(id) {
  return knex('top_pros')
        .select('*')
        .where('id', id)
        .first();
},
create(player) {
  return knex('top_pros')
        .insert(player)
        .returning('*')
        .then(player => player[0])
},
update(id, player) {
  return knex('top_pros')
        .update(player)
        .where('id', id)
        .returning('*')
        .then(player => player[0])
},
delete(id) {
  return knex('top_pros')
        .select('*')
        .where('id', id)
        .del()
}
}
