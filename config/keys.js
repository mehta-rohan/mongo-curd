var dbURI  = 'mongodb://rohan:Rm_9888850580@'
var cluster_one = 'profilecluster-shard-00-00-z92vk.mongodb.net:27017,'
var cluster_two = 'profilecluster-shard-00-01-z92vk.mongodb.net:27017,'
var cluster_three = 'profilecluster-shard-00-02-z92vk.mongodb.net:27017/'
var collection = 'Profile'
var query = '?ssl=true&replicaSet=profileCluster-shard-0&authSource=admin';


var pic_url = "https://robohash.org/";
var pic_ext = ".png";
var pic_query = "?size=150x150&set=set1";

module.exports = {
	dbURI,
	cluster_one,
	cluster_two,
	cluster_three,
	collection,
	query,
	pic_url,
	pic_ext,
	pic_query
}