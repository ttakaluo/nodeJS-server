var mongoose = require("mongoose");
var uri = "mongodb://localhost/test";

mongoose.connect(uri,function(err,succ){
    
    if(err){
        console.log("Could not connect");
    }
    else{
        console.log("Connected to db");
    }
});

var Schema = mongoose.Schema;

var person = new Schema({
    
    name:String,
    address:String,
    email:String
});

var Person = mongoose.model("Person",person);

exports.insertPerson = function(person,req,res){
    
    var temp = new Person();
    temp.name = person.name;
    temp.address = person.address;
    temp.email = person.email;
    
    temp.save(function(err){
        console.log(err);
    });
    
    //res.send("Person Added");
    res.redirect("/");
}

exports.getPersons = function(req,res){

    Person.find().exec(function(err,data){
    
        console.log(err);  //ignored
        console.log(data);
        res.send(data);
    });
}
