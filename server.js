const express = require('express');
const passport = require('passport');

// const db = require('./models');
// Run passport configuration
const passportConfig = require('./config/authentication');

passportConfig.configurePassport(passport);

const PORT = process.env.PORT || 8080;

const server = express();

const routes = require('./routes');

// Configure middleware
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(express.static('client/dist'));
server.use(routes);
passportConfig.configureMiddleware(server);

// Catch-all route
server.get('*', (req, res) => {
  res.redirect('/');
});

const syncOptions = {force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(() => {
  server.listen(PORT, () => {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
// });

module.exports = server;
