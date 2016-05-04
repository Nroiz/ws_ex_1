var express = require('express');
var bodyParser = require('Body-Parser');
var students = require("./students");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var port = process.env.PORT || 3000;

var studentsData = new students();

app.get('*',function(req,res,next){
    console.log("Loged in");
    req.next();
});

app.get('/allExcellenceStudents',function(req,res){
    console.log("Students success");
    res.send(studentsData.getAllExcellenceStudent());
    res.end();
});

app.get('/studentById/:id', function(req,res){
    var studId = req.params.id;
    res.send(studentsData.getStudGrade(studId));
    res.end();
});

app.get('/getExcellenceByYear/:year', function(req,res){
    var year = req.params.year;
    res.send(studentsData.getExcellenceByYear(year));
    res.end();
});

app.listen(port);
console.log("listening to port " + port);
