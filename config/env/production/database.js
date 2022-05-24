const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);


module.exports = ({ env }) => ({
       client,
      connection: {   
           user,
           password,
           database,
           host,
           port,
           
    },
      debug: false,
});

