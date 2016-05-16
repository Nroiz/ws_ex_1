//'mongodb://db_usr:db_pass@ds023490.mlab.com:23490/secound'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: {type:String, index:1, required:true},
	id: {type:Number, required:true, unique:true},
	grade: {type: Number, required:true},
	year: {type: Number, required:true}
}, {collection: 'users'});

var Student = mongoose.model('Student', userSchema);
module.exports = Student;
