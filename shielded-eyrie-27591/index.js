var express = require('express');
var students = require("./students");

var app = express();
var port = process.env.PORT || 3000;

var studentsData = new students();

app.get('*',function(req,res,next){
    console.log("Loged in");
    req.next();
});

app.get('/allExcellenceStudents',function(req,res){
    console.log("Students success");
    res.send(studentsData.getAllExcellenceStudent());
});

app.get('/studentById/:id', function(req,res){
    var studId = req.params.id;
    res.send(studentsData.getStudGrade(studId));
});

app.get('/getExcellenceByYear/:year', function(req,res){
    var year = req.params.year;
    res.send(studentsData.getExcellenceByYear(year));
});

app.get('/', function(req,res){
    var year = req.params.year;
    res.send("Hello, this are the following paths, getExcellenceByYear, studentById, allExcellenceStudents");
});
app.listen(port);
console.log("listening to port " + port);
