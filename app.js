var express = require('express');
var app = express();
const PORT = 3000;

// get request for showing "hello"
app.get('/', (req, res)=>{res.send('hello')})

app.listen(PORT,function(){
  console.log('Hello');
});