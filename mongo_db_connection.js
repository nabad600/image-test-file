// // Module calling
// const MongoClient = require("mongodb");

// // Server path
// const url = 'mongodb://mongo:27017/';

// // Name of the database
// // const dbname = "conFusion";

// MongoClient.connect(url, (err,client)=>{
// 	if(!err) {
// 		console.log("successful connection with the server");
// 	}
// 	else
// 		console.log("Error in the connectivity");
// })

const { MongoClient } = require(‘mongodb’)
const db = { connected: false }

db.client = new MongoClient(‘mongodb://mongo:27017/’)
db.client.on(‘open’, _=>{ db.connected=true, log(now()+‘DB connected.’) })
db.client.on(‘topologyClosed’, _=>{ db.connected=false, log(now()+‘DB disconnected.’) })
