const express = require('express');
const app = new express();

//get the first routing to path Moi
app.route('/Moi').get((req,res)=>{
	res.send('You are accessing the Moi website');
});

//get the first routing to path Moi/Biological
app.route('/Moi/Biological').get((req,res)=>{
	res.send('You are accessing the Biological school , Moi website');
});

//get the first routing to path Moi/Biological/ComputerScience/Biological
app.route('/Moi/Biological/ComputerScience').get((req,res)=>{
	res.send('You are accessing the Computer Science in Biological school , Moi website');
});

//get the default
app.get('/',(req,res)=>{
	res.send('You are accessing default page for the website');
});

//now we have to listen the event after registering them above

app.listen(3000);