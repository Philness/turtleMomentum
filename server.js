var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.render("index");
})

app.listen(port, function(){console.log("Server is live on port 3000.");})