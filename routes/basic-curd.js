const express = require('express');
const router = express.Router();
var {profileSchema} = require('../config/db-connect');

router.get('/search',(req,res)=>{
	console.log(profileSchema);
	res.send('working is well');
});

module.exports = router;

