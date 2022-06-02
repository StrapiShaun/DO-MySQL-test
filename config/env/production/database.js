const parse = require("pg-connection-string").parse;

const config =parse(process.env.DATABASE_URL);


module.exports = ({ env }) => ({
  connection:{     
    client: config.client,
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

