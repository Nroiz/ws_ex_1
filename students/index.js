'use strict'
var fileSys = require('fs');
var jsonFile = "./students/students.json";

var mongoose = require('mongoose');
var Student = require('./students.js');
mongoose.connect('mongodb://db_usr:db_pass@ds023490.mlab.com:23490/secound');

var connection = mongoose.connection;

connection.on('error',function(err){
    console.log('connection to mLab faild.')
});

connection.once('open',function(){
    console.log('Connection to mLab was establish')
});

module.exports = class Students{

    constructor(){
    }



//    getAllExcellenceStudent(){
//        console.log("------All Excellence Students-------");
//        var fileContent = fileSys.readFileSync(jsonFile);
//        var jsonContent = JSON.parse(fileContent);
//        var students = [];
//        for(var i=0; i<jsonContent.length; i++){
//            if(jsonContent[i].grade>=90){
//                console.log(jsonContent[i]);
//                students.push({name:jsonContent[i].name , id:jsonContent[i].id , year:jsonContent[i].year , grade: jsonContent[i].grade});
//            }
//        }
//        if (students.length<1){
//            return "There are no excellence students";
//        }
//        return students;
//    }

    getAllExcellenceStudents(callBackFunction){
        console.log("------All Excellence Students-------");
        Student.find({} , {'_id':false}).where('grade').gt(89)
            .exec(function(err,student){
                    if (err) throw err;
                    console.log(student);
                    callBackFunction(student);
            });
    }


//    getStudGrade(studentId){
//        console.log("-------Get Student By Id-------------");
//        var fileContent = fileSys.readFileSync(jsonFile);
//        var jsonContent = JSON.parse(fileContent);
//        var students = [];
//        for(var i=0; i<jsonContent.length ;i++){
//            if(jsonContent[i].id == studentId){
//                students = JSON.stringify(jsonContent[i]);
//            }
//        }
//        if (students.length<1){
//            return "No such student with this id.";
//        }
//        return students;
//    }

    getStudGrade(id,callBackFunction){
        console.log("-------Get Student By Id-------------");
        Student.find({"id":id},{'_id':false},function(err,student){
            if (err) throw err;
            console.log(student);
            callBackFunction(student);
        });
    }


//    getExcellenceByYear(year){
//        console.log("-------Excellence Studetns for year " + year + " -------------");
//        var fileContent = fileSys.readFileSync(jsonFile);
//        var jsonContent = JSON.parse(fileContent);
//        var students = [];
//        for(var i=0; i<jsonContent.length ;i++){
//            if(jsonContent[i].year == year && jsonContent[i].grade>=90){
//                console.log(jsonContent[i]);
//                students.push({name:jsonContent[i].name , id:jsonContent[i].id , year:jsonContent[i].year , grade: jsonContent[i].grade});
//                }
//            }
//        if (students.length<1){
//            return "No Excellence studetns in this year";
//        }
//        return students;
//    }

    getExcellenceByYear(year,callBackFunction){
        console.log("-------Excellence Studetns for year " + year + " -------------");
        Student.find({"year" : year}, {'_id': false})
        .where('grade').gt(89).exec(function(err, students) {
            if (err) throw err;
            console.log(students);
            callBackFunction(students);
            });
    }

}
