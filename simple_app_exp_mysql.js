const express = require('express');
const app = express();

const mysql = require('mysql');
const con = mysql.createConnection({
	host:'localhost',
	user:'laketurkana',
	password:'forsecuritypurposes',
	database:'BOM'
});

app.route('/customers').get((req,res)=>{
	console.log('connecting to database');
	const sql = 'SELECT * FROM bomData';
	con.query(sql, (err,result)=>{
		if(err){
			throw err;
			return res.status(400).send();
		} 
		else
		{
		console.log("Data sent successfully");
		res.status(200).json(result);
		}
	});
	
});

app.get('/',(err,res)=>{
	res.send("Default page");
})

app.listen(3030);