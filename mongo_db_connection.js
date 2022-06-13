// Module calling
// const MongoClient = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
// const db = { connected: false }

// Server path
const url = 'mongodb://mongo:27017/';

// Name of the database
// const dbname = "conFusion";

MongoClient.connect(url, (err,client)=>{
	if(!err) {
		console.log('successful connection with the server');
	}
	else
		console.log('Error in the connectivity');
});

return this.client.close(false);
