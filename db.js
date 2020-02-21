var low = require('lowdb');
var shortid = require('shortid');

var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);
db.defaults({ users: [] })
  .write();

module.exports = db;