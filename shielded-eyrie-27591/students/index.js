'use strict'
var fileSys = require('fs');

var jsonFile = "./students/students.json";


module.exports = class Students{

    constructor(){
        //super();
    }


    getAllExcellenceStudent(){
        console.log("------All Excellence Students-------");
        var fileContent = fileSys.readFileSync(jsonFile);
        var jsonContent = JSON.parse(fileContent);
        var students = [];
        for(var i=0; i<jsonContent.length; i++){
            if(jsonContent[i].grade>=90){
                console.log(jsonContent[i]);
                students.push({name:jsonContent[i].name , id:jsonContent[i].id , year:jsonContent[i].year , grade: jsonContent[i].grade});
            }
        }
        if (students.length<1){
            return "There are no excellence students";
        }
        return students;
    }

    getStudGrade(studentId){
        console.log("-------Get Student By Id-------------");
        var fileContent = fileSys.readFileSync(jsonFile);
        var jsonContent = JSON.parse(fileContent);
        var students = [];
        for(var i=0; i<jsonContent.length ;i++){
            if(jsonContent[i].id == studentId){
                students = JSON.stringify(jsonContent[i]);
            }
        }
        if (students.length<1){
            return "No such student with this id.";
        }
        return students;
    }

    getExcellenceByYear(year){
        console.log("-------Excellence Studetns for year " + year + " -------------");
        var fileContent = fileSys.readFileSync(jsonFile);
        var jsonContent = JSON.parse(fileContent);
        var students = [];
        for(var i=0; i<jsonContent.length ;i++){
            if(jsonContent[i].year == year && jsonContent[i].grade>=90){
                console.log(jsonContent[i]);
                students.push({name:jsonContent[i].name , id:jsonContent[i].id , year:jsonContent[i].year , grade: jsonContent[i].grade});
                }
            }
        if (students.length<1){
            return "No Excellence studetns in this year";
        }
        return students;
    }

}
