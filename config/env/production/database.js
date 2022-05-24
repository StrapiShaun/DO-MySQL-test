const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
    connection: {
       client: 'mysql',
       connection: {   
           user,
           password,
           database,
           host,
           port,
           'ssl-mode': 'REQUIRED',
    },
      debug: false,
    }
});

