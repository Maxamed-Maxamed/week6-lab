// use javascript in strict mode
'use strict';

// import all required modules
const express = require("express");
const logger = require('./utils/logger');

// initialise project
const app = express();

// static files output to public folder
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   logger.info("Your app is listening on port " + listener.address().port);
// });
// listen for requests :)

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});


"express-handlebars": "^3.1.0"

