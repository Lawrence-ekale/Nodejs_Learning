const mysql = require('mysql');
const con = mysql.createConnection({
	host:'localhost',
	user:'laketurkana',
	password:'forsecuritypurposes'
});

con.connect((error)=>{
	if(error) throw error;
	console.log('connected');
	var primK = 3;
	con.query('SELECT * FROM BOM.bomData where IDNumb=?',[primK],(err,result)=>{
		if(err) throw err;
		console.log(result);
	});
});
