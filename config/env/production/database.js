const parse = require("pg-connection-string").parse;
const knex = require('knex')({client: 'MySQL'})
const config =parse(process.env.DATABASE_URL);



module.exports = ({ env }) => ({
  connection:{     
    client: "MySQL",
    connection: {   
      user: config.user,
      password: config.password,
      database: config.database,
      host: config.host,
      port: config.port,
           
    },
  },
      debug: false,
});

