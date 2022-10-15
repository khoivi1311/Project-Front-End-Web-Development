const express = require('express');
var cors = require('cors')
const app = express();

//setup Port for Backend
const PORT = 4000;

//set CORS
app.use(cors());

/*//setup Body-Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());*/
app.use(express.json());

//setup Router
var productRouter = require('./app/routes/products.router');
app.use('/api/products', productRouter);

app.listen(PORT,function() {
    console.log('Running on http://localhost:4000'); 
});