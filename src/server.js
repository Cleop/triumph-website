const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server();

const port = process.env.PORT || 8000;
server.connection({
  port
});

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('index');
    }
  },
  {
    method: 'GET',
    path:'/volunteer',
    handler:(request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('volunteer');
    }
  },
  {
    method: 'GET',
    path:'/about',
    handler:(request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('about');
    }
  },
  {
    method:'GET',
    path:'/apply',
    handler:(request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('apply');
    }
  },
  {
    method:'GET',
    path:'/faq',
    handler:(request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('faq');
    }
  },
  {
    method:'GET',
    path:'/contact',
    handler:(request, reply) => {
      request.headers['content-type'] === 'text' ? reply().code(400) : reply.view('contact');
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
