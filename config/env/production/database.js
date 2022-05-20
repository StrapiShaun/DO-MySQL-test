// const parse = require("pg-connection-string").parse;

// const { host, port, database, user, password } = parse(
//   process.env.DATABASE_URL
// );


// module.exports = ({ env }) => ({
//     connection: {
//       client: 'mysql',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         ssl: 'required'
//       },
//         debug: false,
//     },
//   });

module.exports = ({ env }) => ({ defaultConnection: 'default', connections: { default: { connector: 'bookshelf', settings: { client: 'mysql', host: env('DATABASE_HOST', 'localhost'), port: env.int('DATABASE_PORT', 3306), database: env('DATABASE_NAME', 'strapi'), username: env('DATABASE_USERNAME', 'strapi'), password: env('DATABASE_PASSWORD', 'strapi'), }, options: {}, }, }, });