const express = require('express');
const app = express();
const port = 5000;
app.get('/',(req,res) =>{
	res.send('hello from node');

});
app.get('/headers',(req,res) =>{
	res.set('X-full_stack','4life').status(418).send("i prefer horlicks");

});
app.listen(port,()=>{
	console.log(`server started on port ${port} `);
});
