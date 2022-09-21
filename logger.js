/*const EventsEmitter = require('events');
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

class Logger extends EventsEmitter{
	log(message){
	//send an HTTP request
	console.log(message);

	//raise an event//make noise or produce something that event has happend
	//emitter.emit('messageLogged'); or add an id or url
	this.emit('messageLogged', {id: 1, url: 'https:portal.mu.ac.ke'});
	//Raise: logging (data: message)

	this.emit('Logging',{id:435, password:'Motorihi6'});
	}

}

module.exports = Logger;
*/

const http = require('http');


const server = http.createServer();

//register first
server.on('Connection ', (socket)=>{
	console.log('New Connection created...');
});

server.listen(3000);

console.log('Listening on port 3000....');


