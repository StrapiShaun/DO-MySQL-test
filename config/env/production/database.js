const parse = require("pg-connection-string").parse;
//const knex = require('knex')({client: 'MySQL'})
const config =parse(process.env.DATABASE_URL);



module.exports = ({ env }) => ({
  connection:{  
  client: 'mysql',
  connection: {
    host,
    port,
    database,
    user,
    password,
    ssl: {
      rejectUnauthorized: false,
    },
  
  debug: false,
},
},
});



