const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const port = 4000;
let db;

app.engine('.hbs', exphbs({
    extname: '.hbs',

}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {

    db.collection('portfolio').find().sort({_id: -1}).limit(4).toArray((err, result) => {
        err ? console.log(err) : null;
        const portfolio = result;

        db.collection('presentSlides').find().sort({_id: -1}).limit(6).toArray((err, result) => {
            err ? console.log(err) : null;
            const present = result;
            res.render('home', {portfolio: portfolio, layout: false, present: present});

        });
    });
});

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
    err ? console.log(err) : null;

    db = database.db('jetro');
    app.listen(4000, () => {
        console.log(`localhost ${port}`);
    });
});
