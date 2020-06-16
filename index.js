require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const db = require('./helper/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(require('./routes/router'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// call Helmet
app.use(helmet());

// contentSecurityPolicy whitelists some external sources
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ['"self"'],
    fontSrc: ['"self"', 'https://fonts.google.com'],
  },
}));

// avoids against clickjackking, it removes the iframes for users.
app.use(helmet.frameguard({action: 'sameorigin'}));
// hidePoweredBy removes the header information
app.disable('x-powered-by');
// hsts makes sure the website will be run by https
const sixtyDaysInSeconds = 5184000; // 60 days
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));


db.connect(() => {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});


