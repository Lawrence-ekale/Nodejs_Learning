//make sure you install and save the express package in the directory of the project otherwise it will throw an error
const express = require('express');
//since express is a module/class now we have to create an instance/object of express
const app = new express();

app.get('/',(req,res)=>{
	res.send('Hello there!');//this is the response which will be sent to the user in the browser accessing the port below
});

app.listen(3030);//I have not provided a callback function but you can put it to execute as it will be done in the backgroung.
/*app.listen(3030,()=>{
	console.log("connecting at port 3030...")
});*/