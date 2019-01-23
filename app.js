var express = require('express');
var app = express();
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log(req.ipInfo);
})

app.listen(3000);

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
