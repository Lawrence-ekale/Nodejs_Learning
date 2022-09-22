//before importing this package make sure you have installed the "request module " by simply "npm install request --save" in the directory of your project
const request = require('request');
request('https://mu.ac.ke',(error,res,body)=>{
	if(error) console.log(error);
	else
	{
		console.log(body);//loading the body of the page in the console if its successful
	}
});