const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: 'required'
      },
        debug: false,
    },
  });

  