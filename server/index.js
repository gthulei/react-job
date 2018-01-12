const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const jdbc = require('./jdbc');
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user',require('./user'))

app.listen(8080, () => {
    console.log('listem on 8080 o(*￣︶￣*)o');
})