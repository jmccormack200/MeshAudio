//Source: http://www.graemeboy.com/node-udp

var dgram = require('dgram');

//var host = process.argv[2];

//var port = parseInt(process.argv[3],10);

var host = "127.0.0.1";
var port = 4000;

client = dgram.createSocket('udp4');

process.stdin.resume();

process.stdin.on('data', function(data){
	console.log("Sent");
	client.send(data, 0, data.length, port, host);
});

client.on('message', function(message){
	console.log("Get");
	console.log("Client: " + message.toString());
});

client.bind(port);

console.log("To send a message, " + 
			"type now and press return");
			
			