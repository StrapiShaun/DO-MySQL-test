const parse = require("pg-connection-string").parse;
const knex = require('knex')({client: 'mysql'})
const config =parse(process.env.DATABASE_URL);



module.exports = ({ env }) => ({
  connection:{     
    client: "mysql",
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

