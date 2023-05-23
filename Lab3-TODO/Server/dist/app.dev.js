"use strict";

var express = require('express');

var mongoose = require('mongoose');

var parser = require("body-parser");

var dotenv = require('dotenv').config();

var todoRoutes = require('./routes/items');

var app = express();
app.use(parser.urlencoded({
  extended: false
}));
app.use(express.json());
mongoose.connect(process.env.DB_CONNECTION).then(function () {
  return console.log("Database connection established");
})["catch"](function (err) {
  return console.log(err);
});
app.use(todoRoutes);
app.listen(3000, function () {
  return console.log("Server is listening on port 3000");
});
//# sourceMappingURL=app.dev.js.map
