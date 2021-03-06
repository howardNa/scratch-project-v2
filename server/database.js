const dotenv = require('dotenv');
dotenv.config();
const Promise = require("bluebird");
//Setting up options to use Bluebird promises
const initOptions = {
  promiseLib: Promise
};

// Loading and initializing the pg-promises:
const pgp = require('pg-promise')(initOptions);
// Preparing the connection details:
const cn = process.env.POSTGRES_URL;
// Creating a new database instance from the connection details:
const db = pgp(cn);
//Testing postgres db connection
db.proc('version')
    .then(data => {
      console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
    
// Exporting the database object for shared use:
module.exports = db;

