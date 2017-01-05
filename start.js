// Starts server.js
const server = require('./src/server.js');

server.start((err) => {
  if (err) throw err;
  console.log(`Server running on ${server.info.uri}`);
});
