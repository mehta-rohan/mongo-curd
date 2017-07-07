var dbURI = 'mongodb://rohan:Rm_9888850580@'
var cluster_one = 'profilecluster-shard-00-00-z92vk.mongodb.net:27017,'
var cluster_two = 'profilecluster-shard-00-01-z92vk.mongodb.net:27017,'
var cluster_three = 'profilecluster-shard-00-02-z92vk.mongodb.net:27017/'
var collection = 'Profile'
var query = '?ssl=true&replicaSet=profileCluster-shard-0&authSource=admin';

//mongodb://13.126.205.251:27017/MyApp?authSource=admin'

var ec2IP = '13.126.205.251';
var ec2PORT = '27017';
var collection = 'admin'
var user = 'mehta-rohan';
var pass = 'OP88888888';
var colon = ':';
var fSlash = '/';
var qMark = '?';
var ec2DB = "MyApp";

var EC2DBUri = `mongodb://${ec2IP}${colon}${ec2PORT}${fSlash}${ec2DB}${qMark}authSource=admin`
var localURI = 'mongodb://localhost:27017/MyApp'
var pic_url = "https://robohash.org/";
var pic_ext = ".png";
var pic_query = "?size=150x150&set=set1";

var DB = 'local'; //remote

var ec2PublicDNS = 'ec2-user@ec2-13-126-205-251.ap-south-1.compute.amazonaws.com';

module.exports = {
	dbURI,
	cluster_one,
	cluster_two,
	cluster_three,
	collection,
	query,
	pic_url,
	pic_ext,
	pic_query,
	EC2DBUri,
	user,
	pass
}