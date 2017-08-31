var socksController = require('./controllers/socksController');
var authController = require('./controllers/authController');
var usersController = require('./controllers/usersController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Socks')}}},
	{method: 'GET', path: '/v1/socks', config: socksController.getSocks},
  {method: 'POST', path: '/v1/sock', config: socksController.createSock},
	{method: 'PUT', path: '/v1/sock', config: socksController.modifySock},
	{method: 'DELETE', path: '/v1/sock', config: socksController.deleteSock},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
];
