const parse = require("connection-string-parser").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
    connection: {
      engine: 'mysql',
      connection: {
        host,
        port,
        database,
        user,
        password,
        //ssl: 'required'
      },
        debug: false,
    },
  });

  