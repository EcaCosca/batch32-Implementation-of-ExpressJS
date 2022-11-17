let express = require('express');
let app = express();
let path = require('path');
let ejs = require('ejs');
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
    
    let fileName = 'file.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

// GET request for showing test-ejs
app.get('/test-ejs', (req, res)=>{ejs.render('Hey')})

app.listen(PORT,function(){
  console.log('Hello');
});