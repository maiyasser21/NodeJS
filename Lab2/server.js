const http=require('http');
const url=require('url');
const https=require('https');

const server=http.createServer((req,res)=>{
const {pathname,query}=url.parse(req.url,true);
if (pathname==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Welcome to the index page!</h1>');
  } else if (pathname === '/search') {
    const searchQuery = query.q;

    if (!searchQuery) {
      res.statusCode = 400;
      res.end('Missing search query parameter.');
      return;
    }
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;

    https.get(googleSearchUrl, googleRes => {
      let responseData = '';

      googleRes.on('data', chunk => {
        responseData += chunk;
      });
      googleRes.on('end', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(responseData);
      });
    }).on('error', error => {
      res.statusCode = 500;
      res.end(`An error occurred: ${error.message}`);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});