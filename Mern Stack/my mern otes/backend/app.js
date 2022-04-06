const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const product = require('./routes/ProductRoute');
const user = require('./routes/UserRoute');
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());




app.use('/api',product);
app.use('/api',user);


// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;