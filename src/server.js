const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');
// const routes = require('./routes.js');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 8080
});

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('index');
    }
  },
  {
    method: 'GET',
    path:'/volunteer',
    handler:(request, reply) => {
      reply.view('volunteer');
    }
  },
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  },
  ];

server.register([Vision, Inert], err => {
  if (err) throw err;

  server.views({
    engines: {
      hbs: Handlebars
    },
    relativeTo: __dirname,
    path: 'views',
    layoutPath: 'views/layouts',
    helpersPath: 'helpers',
    layout: 'default'
  });

  server.route(routes);
});

module.exports = server;
