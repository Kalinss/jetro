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
app.get('/blog',(request,response)=>{ response.send("<h2>Привет Express!</h2>");});
app.post('/blog',urlencodedParser,(req,res)=>{
    res.end(JSON.stringify(blogJSON()));

});
app.post('/check',urlencodedParser,(req,res)=>{
    res.end(JSON.stringify({articles:0}));
});


app.listen(port,()=>{
    console.log('We are live on ' + port);
});




