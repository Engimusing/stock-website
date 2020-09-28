const { database_url, dbName, dbUser  } = require('./config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: dbName,
      user: dbUser
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: database_url
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
