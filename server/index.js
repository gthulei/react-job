const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const jdbc = require('./util/jdbc');

app.use(expressSession({
  name: 'identity',
  secret: 'keyboard cat',
  resave: true,
  rolling: true,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 30}
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user',require('./user'))

app.listen(8080, () => {
    console.log('listem on 8080 o(*￣︶￣*)o');
})