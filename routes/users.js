var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * @param  {[type]}
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;