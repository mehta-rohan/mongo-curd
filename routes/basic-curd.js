const express = require('express');
const router = express.Router();
var {profileSchema} = require('../config/db-connect');

router.get('/search',(req,res)=>{
	//console.log(db);
	res.send('working is well');
});

router.get('/register',(req,res)=>{
	//console.log(db);

	res.send(req);
});

module.exports = router; 