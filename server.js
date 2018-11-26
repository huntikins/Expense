const serverConfig = require('./config/server');
const server = serverConfig.server;
const PORT = serverConfig.PORT;

const routes = require('./routes');

server.use(routes);

// Catch-all route
server.get('*', (req, res) => {
  res.redirect('/');
});

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(() => {
  server.listen(PORT, () => {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
// });