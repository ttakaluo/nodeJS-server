var express = require("express");
var bodyParser = require("body-parser");
var database = require("./database");
var app = express();

app.use(function(req,res,next){
    
    console.log(req.method);
    next();
    
});

app.use('/',express.static(__dirname + '/public'));   //Handles all static files in path

app.use(bodyParser());

app.get("/people", function(req,res){
    
    database.getPersons(req,res);
});

app.post("/new", function(req,res){
   
    var person = {
        
        name:req.body.all_name,
        address:req.body.address,
        email:req.body.email
    }
    
    database.insertPerson(person,req,res);
    
    //console.log("post method for /new path");
    //console.log(req.body);
    //res.send("ok");
    
});

app.listen("4500");
