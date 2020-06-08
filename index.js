const express = require('express');
const bodyParser = require('body-parser');
// const mongodb = require('mongodb');
// const objectId = mongodb.ObjectID;
// const flash = require('express-flash');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();
const port = 3000; // 3000


app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cookieParser());
// app.use(
//     session({
//       secret: process.env.SECRET,
//       resave: true,
//       saveUninitialized: false,
//       cookie: {
//         maxAge: 3600000,
//       },
//     }),
// );
// app.use(flash());

const index = require('./routes/index');
const Register = require('./routes/register');
const login = require('./routes/log-in');

app.use('/', index);
app.use('/', Register);
app.use('/', login);


app.listen(port, () => console.log(`Dating-app listening at http://localhost:${port}`));
