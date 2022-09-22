//since jade template because obsolute then pug was brought.
// create a directory called "views" then put the "index.pug" inside there.
const express = require('express');
const app = express();


app.set('view engine', 'pug');
app.get('/',(req,res)=>{
	res.render('index',{title:'Lawrence',message:'First jade and Express app'})
});

app.listen(3030);