// const parse = require("pg-connection-string").parse;
// const knex = require('knex')({client: 'mysql'});
// //const config =parse(process.env.DATABASE_URL);

const knex = require('knex');
knex.client = 'mysql';
module.exports = ({ env }) => ({
 
  
  client: 'mysql',
  connection: process.env.DATABASE_URL,
  searchPath: 'knex,public',
  pool: { min: 0, max: 7 }
   
//   client: 'mysql',
//   connection: {
//     host,
//     port,
//     database,
//     user,
//     password,
//     ssl: {
//       rejectUnauthorized: false,
//     },
  
//   debug: false,
// },

});



