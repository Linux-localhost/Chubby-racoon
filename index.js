require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;
const db = require('./helper/database');






const app = express();
const port = process.env.PORT || 3000; // 3000




app.use(require('./routes/router'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cookieParser());


db.connect(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});
