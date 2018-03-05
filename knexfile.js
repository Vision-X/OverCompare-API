// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postfres://localhost/saved_players'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
