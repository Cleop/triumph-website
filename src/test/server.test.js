const test = require('tape');
const server = require('../server.js');

test('The server is running', (t) => {
  server.start( (err) => {
    if (err) {t.error(err);
    } else {t.pass('PASS: Server is running')};
    server.stop();
    t.end();
  });
})

test(`Check the '/' route`, (t) => {
  const options = {
    method: 'GET',
    url:'/',
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 200, `PASS: You received a 200 status code for '/' route`);
    t.end()
  });
});

test(`Check the '/apply' route`, (t) => {
  const options = {
    method: 'GET',
    url:'/apply',
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 200, `PASS: You received a 200 status code for '/apply'`);
    t.end()
  });
});

test('Check the headers and issue a 400 error', (t) => {
  const options = {
    method: 'GET',
    url:'/',
    headers:{'content-type':'text'}
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 400, 'PASS: You are successfully sending error messages');
    t.end()
  });
});
