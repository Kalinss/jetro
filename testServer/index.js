//server
// localhost:4000
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const urlencodedParser = bodyParser.urlencoded({extended: true});

const blogJSON = require('./test/testDataBlog');
app.use(cors());



app.get("/", function(request, response){

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
app.get('/blog',()=>{});
app.post('/blog',urlencodedParser,(req,res)=>{
    console.log(blogJSON);
    res.end(JSON.stringify(blogJSON()));

});


app.listen(port,()=>{
    console.log('We are live on ' + port);
});




