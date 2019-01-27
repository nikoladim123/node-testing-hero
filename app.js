const express = require('express');
const path = require('path');
const expressip = require('express-ip');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PORT = process.env.PORT || 5000;

const userInfoSchema = new Schema({
  nickName:String,
  name:String,
  password:String,
  email:String
});

const userInfo = mongoose.model('newuser',userInfoSchema);
mongoose.connect('mongodb://timbe:Timbetimbe91!@ds211613.mlab.com:11613/timbe');
// mongoose.connect('mongodb://timbe:Timbetimbe91!@ds213615.mlab.com:13615/users');
// mongoose.connect('mongodb://timbe:Timbetimbe91!@ds213615.mlab.com:13615/users');
// mongodb://<dbuser>:<dbpassword>@ds213615.mlab.com:13615/users
// https://node-testin.herokuapp.com/users
var ipInfo;
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(expressip().getIpInfoMiddleware)
  .use(function(req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", '*');
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next()
  })
  .get('/', (req, res) => {
    res.redirect('https://pishe.herokuapp.com/');
    ipInfo = req.ipInfo;
    console.log(ipInfo);
  })
  .get('/api',(req,res)=>{
    res.send(ipInfo);
  })

  .post('/users',urlencodedParser,(req,res)=>{
    var newInfo = new userInfo({
      nickName:req.body.nickName,
      name:req.body.name,
      password:req.body.password,
      email:'req.body.email'
  });
  console.log(req.body);
  newInfo.save();
    // userInfo = req.body;
  })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  // https://node-testin.herokuapp.com/




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
