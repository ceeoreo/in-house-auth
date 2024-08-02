// const http = require("http");

// const hostname = "127.0.0.1"
// const port = 8000;

// const server = http.createServer((res, req) => {
//   res.writeHead(200, {"Content-Type": "text/plain"});

//   res.end ("Hello World\n");
// });

// server.listen(port, hostname, function(){
//   console.log(`Server running at ${hostname}:${port}`);
// })
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('folder'));

app.get('/', function(req, res) {
  res.send('Hellow World');
});

app.listen(port, function () {
  console.log(`This app is listening on port ${port}`)
});