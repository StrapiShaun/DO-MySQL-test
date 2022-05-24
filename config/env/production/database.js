const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
    connection: {
       client: 'mysql',
       connection: {   
        'ssl-mode': 'REQUIRED',
           user,
           password,
           database,
           host,
           port,
    },
      debug: false,
    }
});

