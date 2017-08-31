var sock = require('../schemas/sock');

exports.getSocks = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function (request, reply) {
    console.log(request.query);
    var socks = sock.find(request.query);
    reply(socks);
  }
}

exports.createSock = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function (request, reply) {
    console.log(request.payload);
    var newSock = new sock({
      nombre: request.payload.nombre,
      marca: request.payload.marca,
      color: request.payload.color,
      talla: request.payload.talla,
      tipo: request.payload.tipo,
      estampado: request.payload.estampado,
      genero: request.payload.genero,
      precio: request.payload.precio
    });
    newSock.save();
    console.log('sock saved');
    return reply('ok');
  }
}

exports.modifySock = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function (request, reply) {
    console.log(request.query.nombre);
    if (request.query.nombre) {
      var socks = sock.find({ nombre: request.query.nombre });
      socks.update({ $set: request.payload }, function (err) {
        if (err) {
          reply('no se edito');
        } else {
          reply('se edito con exito');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }

  }
}

exports.deleteSock = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function (request, reply) {
    console.log(request.query.nombre);
    if (request.query.nombre != undefined) {
      var socks = sock.find({ nombre: request.query.nombre });
      socks.remove(function (err) {
        if (err) {
          reply('not deleted');
        } else {
          reply('deleted');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }
  }
}