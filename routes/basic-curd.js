const express = require('express');
const router = express.Router();
var {profileSchema,mongoose} = require('../config/db-connect');

router.get('/search',(req,res)=>{
	//console.log(db);
	res.send('working is well');
});

router.post('/register',(req,res)=>{
	var pic_url = "https://robohash.org/";
	var pic_ext = ".png";
	var pic_query = "?size=150x150&set=set1";
	var body = req.body; 
	var Profile = mongoose.model('Profile',profileSchema);
	var NewRegisteration = new Profile({
		first_name : body.first_name,
		last_name : body.last_name,
		email : body.email, 
		phone_number : body.phone,
		address : body.address+" city: "+body.city+" state: "+body.state+" zip: "+body.zip,
		occupation : body.occupation,
		profile_pic : pic_url+body.email+pic_ext+pic_query,
		project :body.comment 
	});
	NewRegisteration.save().then((doc)=>{
		res.status(200).render('sucess', { 
			title: 'Wellcome',
			name : body.first_name+" "+body.last_name,
			email : body.email 
		});
	},(err)=>{
		res.status(400).res.render('error',{message: 'snap!!!',err});
	});
});

module.exports = router; 