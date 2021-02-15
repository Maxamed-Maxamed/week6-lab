// use javascript in strict mode
'use strict';

// import all required modules
const express = require("express");
const logger = require('./utils/logger');
const exphbs = require('express-handlebars');


// initialise project
const app = express();
const routes = require('./routes');
app.use('/', routes);
// static files output to public folder
app.use(express.static("public"));


// use handlebars as view engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   logger.info("Your app is listening on port " + listener.address().port);
// });
// listen for requests :)

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info(`glitch-playlist1 started on port ${listener.address().port}`);
});




