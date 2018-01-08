var express     = require('express');
var app         = express();
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var mongoose    = require('mongoose');

mongoose.Conn;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());


app.post('api/test', function(req, res){
  console.log(req.body);

  var response = "Load and clear";
  res.json(response);

});

app.listen(8080);
console.log("App listen on port 8080");
