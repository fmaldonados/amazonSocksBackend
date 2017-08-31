var mongoose = require('mongoose');

var SockSchema = new mongoose.Schema({
  nombre : String,
  marca : String,
  color : String,
  talla : String,
  tipo : String,
  estampado : String,
  genero : String,
  precio : String,
});

module.exports = mongoose.model('Sock', SockSchema);
