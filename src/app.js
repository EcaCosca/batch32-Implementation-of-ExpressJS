let express = require('express');
let app = express();
let path = require('path');
let ejs = require('ejs');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'assets/views'))


app.use(express.static(path.resolve(__dirname,'assets')));

// GET request for showing test-ejs
app.get('/test-ejs', (req, res)=>{res.render('index.ejs',{myTitle:'my first title'})})

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


app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});