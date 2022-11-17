var express = require('express');
var app = express();
var path = require('path');
const PORT = 3000;

// GET request for showing "hello"
app.get('/', (req, res)=>{res.send('hello')})

// GET request for showing "hello"
app.delete('/', (req, res)=>{res.json({"good" : "yep"})})

// PUT request for sending file.html
app.put('/', (req, res)=>{
    let options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'file.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.listen(PORT,function(){
  console.log('Hello');
});