"use strict";

var http = require('http');

var url = require('url');

var https = require('https');

var server = http.createServer(function (req, res) {
  var _url$parse = url.parse(req.url, true),
      pathname = _url$parse.pathname,
      query = _url$parse.query;

  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Welcome to the index page!</h1>');
  } else if (pathname === '/search') {
    var searchQuery = query.q;

    if (!searchQuery) {
      res.statusCode = 400;
      res.end('Missing search query parameter.');
      return;
    }

    var googleSearchUrl = "https://www.google.com/search?q=".concat(searchQuery);
    https.get(googleSearchUrl, function (googleRes) {
      var responseData = '';
      googleRes.on('data', function (chunk) {
        responseData += chunk;
      });
      googleRes.on('end', function () {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(responseData);
      });
    }).on('error', function (error) {
      res.statusCode = 500;
      res.end("An error occurred: ".concat(error.message));
    });
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }

  var port = 3000;
  server.listen(port, function () {
    console.log("Server running on port ".concat(port));
  });
});
//# sourceMappingURL=server.dev.js.map
