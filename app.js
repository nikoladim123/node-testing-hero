const express = require('express');
const path = require('path');
const expressip = require('express-ip');
const PORT = process.env.PORT || 5000;


var ipInfo;
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(expressip().getIpInfoMiddleware)
  .use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", 'https://pishe.herokuapp.com/');
      res.header("Access-Control-Allow-Credentials", true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorisation');
      next();
  })
  .get('/', (req, res) => {
    res.redirect('https://pishe.herokuapp.com/');
    ipInfo = req.ipInfo;
    console.log(ipInfo);
  })
  .get('/api',(req,res)=>{
    res.send(ipInfo);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));




  // app.set("PORT", PORT);


  // app.listen(app.get('PORT'), function () {
  //     console.log('Express started on http://localhost:' +
  //         app.get('PORT') + '; press Ctrl-C to terminate.');
  // });

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
