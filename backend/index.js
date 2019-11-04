const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const homeController = require('./controller/homeController');
const app = express();
const port = 4000;
let db;


app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/', homeController.getHome);
app.get('/about',(req,res)=>{
    res.render('about',{name:'about'})
});

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
    err ? console.log(err) : null;
    db = database.db('jetro');
    app.listen(4000, () => {
        console.log(`localhost ${port}`);
    });
});
