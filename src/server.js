const Hapi = require('hapi');
const Vision = require('vision');
const routes = require('./routes.js');
const Inert = require('inert');

// const defaultRoute = {
//   method: 'GET',
//   path: '/{param*}',
//   handler: {
//     directory: {
//       path: './public'
//     }
//   }
// };

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 8080
});

// server.register([Inert, Vision], (registerError) => {
//   server.views({
//     engines: {
//       hbs: require('handlebars')
//     },
//     relativeTo: __dirname,
//     path: '../views',
//     layoutPath: '../views/layout',
//     layout: 'default'
//   });
//
//   if (registerError) throw registerError;
//   server.auth.strategy('session', 'cookie', cookieOptions);
//   server.route([defaultRoute, ...routes]);
// });
//
module.exports = server;
