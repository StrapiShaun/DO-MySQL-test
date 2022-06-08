const parse = require("pg-connection-string").parse;
const knex = require('knex')({client: 'mysql'});
//const config =parse(process.env.DATABASE_URL);



module.exports = ({ env }) => ({
  
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

});



