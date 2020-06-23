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
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', 'public');

// call Helmet
app.use(helmet());

// turned on (using for project)
// contentSecurityPolicy whitelists the external font-source (default off)
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ['\'self\''],
    fontSrc: ['\'self\'', 'https://fonts.google.com'],
  },
}));
// avoids against clickjackking, it removes the iframes for users. (default on)
app.use(helmet.frameguard());
// hidePoweredBy removes the header information (default on)
app.disable('x-powered-by');
// hsts makes sure the website will be run by https (default on)
const sixtyDaysInSeconds = 5184000; // 60 days
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
// premittedCrossDomainPolicies denies crossdomain requests (default off)
app.use(helmet.permittedCrossDomainPolicies({permittedPolicies: 'master-only'}));


// turning off the defaults
app.use(helmet({
  dnsPrefetchControl: false,
  ieNoOpen: false,
  noSniff: false,
  xssFilter: false,
  // expectCt by default off
  // reffererPolicy by default off
}));

app.use(function(req, res, next) {
  res.status(404);
  res.render('index.ejs');
});

db.connect(() => {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});


