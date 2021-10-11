// Update with your config settings.

module.exports = {

  client: 'backendasabase',
  connection: {
    database: 'my_db',
    user: 'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
