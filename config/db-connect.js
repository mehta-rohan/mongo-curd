var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var {
		dbURI,
		cluster_one,
		cluster_two,
		cluster_three,
		collection,
		query,ec2IP,
		ec2PORT,
		collection,
		EC2DBUri,
		user,
		pass
	} = require('./keys');

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





//mongoose.connect(`mongodb://${ec2IP}:${ec2PORT}/${collection}?authSource=admin`,{user: `${user}`, pass: `{pass}`})
mongoose.connect(`${EC2DBUri}`,{user: `${user}`, pass: `${pass}`})
	.then(()=>{
		console.log('healthy');
	}).catch((err)=>{
		console.log('crap:' +err);
});


// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + EC2DBUri);
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
