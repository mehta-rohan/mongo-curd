var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbURI  = 'mongodb://localhost:27017/profile';

mongoose.Promise = global.Promise;

var profileSchema = new Schema({
	first_name:String,
	last_name:String,
	email:String,
	phone_number:Number,
	occupation:String,
	profile_pic:String,
	project:String,
	address:String,
	creation_date:{
		type : Date,
		default : Date.now
	}
}); 

mongoose.connect(dbURI,{useMongoClient : true})
	.then(()=>{
		console.log('healthy');
	}).catch((err)=>{
		console.log('crap:' +err);
	});


// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function (err) {  
  console.log('Mongoose default connection disconnected' + err); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
})

module.exports = {profileSchema,mongoose}
