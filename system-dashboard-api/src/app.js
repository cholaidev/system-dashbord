const express = require('express');//express app itself
const cors = require('cors');
const configHelper = require('./shared/helpers/config.helper');
const listRoutes = require('express-list-endpoints');
const db = require('./knex'); //db
db.checkDbConnection();//check db
// db.checkDbConnectionForLogger();
//init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true }))
app.use(cors());
app.enable('trust proxy'); //to trust the proxy request for https connection


// app.use('/static',express.static('storage'));

//import routers
app.use('/'+configHelper.apiPath+'/v'+configHelper.apiVersion,require('./router'));

//display all routes
app.get('/'+configHelper.apiPath,function(req,res){
  res.send(listRoutes(app));
});



//global listener

//export to server.js
module.exports = {
  instance : app,
  port : configHelper.port
}