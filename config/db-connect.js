var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
	id:{
		required: true,
		type: String
	},
	first_name:String,
	last_name:String,
	email:String,
	gender:String,
	phone_number:[String],
	occupation:String,
	profile_pic:String,
	creation_date:{
		type : Date,
		default : Date.now
	}
}); 

module.exports = {profileSchema}