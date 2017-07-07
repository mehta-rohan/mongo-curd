const express = require('express');
const router = express.Router();
var {
	profileSchema,
	mongoose
} = require('../config/db-connect');
var {
	pic_url,
	pic_ext,
	pic_query
} = require('../config/keys.js');


/**
 * @param  {[type]}
 * @param  {Function}
 * @param  {[type]}
 * @return {[type]}
 */
router.post('/register', (req, res) => {
	var NewRegisteration = getPopulationInstance(req.body);

	NewRegisteration.save().then((doc) => {

		res.status(200).render('sucess', {
			title: 'Wellcome',
			name: body.first_name + " " + body.last_name,
			email: body.email
		});
	}, (err) => {
		res.status(400).res.render('error', {
			message: 'snap!!!',
			err
		});
	});
});

router.get('/search', (req, res) => {
	var Profile = mongoose.model('Profile', profileSchema);
	Profile.findOne(req.query, (err, result) => {
		if (err)
			res.send("Psssssst!!!!!!! Something to worry :/");
		else
			res.send(result);
		res.send(result);

	})
});


var getPopulationInstance = function(body) {
	var Profile = mongoose.model('Profile', profileSchema);
	return new Profile({
		first_name: body.first_name,
		last_name: body.last_name,
		email: body.email,
		phone_number: body.phone,
		address_line: body.address,
		city: body.city,
		state: body.state,
		zip: body.zip,
		occupation: body.occupation,
		profile_pic: pic_url + body.email + pic_ext + pic_query,
		project: body.comment
	});
}



module.exports = router;