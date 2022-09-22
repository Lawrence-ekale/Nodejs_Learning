/*function sayHello(name){
	console.log('Hello ' + name);
}

sayHello("Frida");*/
//console.log(module);
//use const for require to prvent overriding
//const logger = require('./logger.js');//you can say logger without js  ../ previous folder
//logger=1

//we can export a function directly by removing module.exports.logger and rather module.exports = log;
//then call it directly like logger('Message');
//logger('message 43');

//const path  = require('path');

//var pathObj = path.parse(__filename);
//console.log(pathObj);

/*const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();*/

//console.log(" Total Memory: " + totalMemory);

//Template String
//ES6N / ES2015 : ECMAScript 6

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free  Memory: ${freeMemory}`);

//const fs = require('fs');

/*const files = fs.readdirSync('./');
console.log(files);*/

/*fs.readdir('$',function(err,files){
	if(err) console.log('Error',err);
	else console.log('Result',files);
});*/

/*const EventsEmitter = require('events');



const Logger = require('./logger.js');
const logger = new Logger();

//register a listener before raising an event
logger.on('messageLogged',(arg) =>{ //or e, eventArg
	console.log('Listener called',arg);
});

//Register first
logger.on('Logging',(data)=>{
	console.log('Logging called',data)
});


logger.log('Message 43');*/
const http = require('http');


const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.write('Hello Frida');
		res.end();
	}
	if(req.url === '/api/courses'){
		res.write(JSON.stringify([1,2,3]));
		res.end();
	}
});

//register first
/*server.on('connection', (socket)=>{
	console.log('New Connection created...');
});*/


server.listen(3000);

console.log('Listening on port 3000....');