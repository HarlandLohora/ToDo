const mongose = require("mongoose");

let db;

module.exports = function Connection(){
  if(!db){
    db = mongoose.connect('mongodb://localhost/crud-todo');
  }

  return db;
}
