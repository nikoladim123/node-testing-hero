const express = require('express');
const path = require('path');
const expressip = require('express-ip');
const PORT = process.env.PORT || 5000;

express().use(expressip().getIpInfoMiddleware);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send('hellooo'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  express().get('/ab', function (req, res) {
      res.send(req.ipInfo);
  });

// var response;
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
// 	console.log(xhttp);
//   xhttp.onreadystatechange = function(a) {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(a);
//     }
//   };
//   xhttp.open("GET", "http://api.ipapi.com/109.92.51.181?access_key=3a612522a0f97c98d0f961291a91b1e7", true);
//   xhttp.send();
// }
// http://api.ipapi.com/109.92.51.181?access_key=3a612522a0f97c98d0f961291a91b1e7
// npm install express-ip
