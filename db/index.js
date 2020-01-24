const Datastore = require('nedb');
const db = new Datastore({ filename: 'db/data.db', autoload: true });

module.exports = db;