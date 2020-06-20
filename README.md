# Chubby-racoon

> Hi, welcome to our repository here you can find our source code for our dating app! We will be making a dating app. This dating app is programmed in node.js

## Our App - TheRelationShip
The app we have created is a new dating app for people who seek love. It can be used on your phone or desktop browser and is easy to use. Users can dislike, like or extra like someone and start a conversation with them if they like them back. 

## Team

Mike Hovenier

_[Github](https://github.com/mikehov)_ 

Rosa Voogd

_[Github](https://github.com/rosavoogd)_

Rowin Danilo Ruizendaal

_[Primary](https://github.com/rowinruizendaal)_  ||  _[Secondary](https://github.com/linux-localhost)_ 

## Features

The first feature you'll come across is the **register/log in** feature developed by Rowin. You'll be able to create an account and start your dating journey. Everyone you like and talk with will be stored in our database under your account and when you come back to log in again all of your data will still be there for you to access and continue!

The next feature is **swiping**, developed by Mike. Whenever you like or dislike someone this will be saved in our database and we'll show you the next person you could like or dislike. All of these people will be saved and if they like you back you'llbe considered a match.

The final feature was going to be a **filter** feature that you could apply in your settings. You could select your prefered age, gender and distance to filter people who fit into your preferences. However, Rosa was sadly not able to make it work.

See our [Wiki](https://github.com/Linux-localhost/Chubby-racoon/wiki) for more information.

## Topics

### Deployment
To deploy our website Rosa did some research about which service to use and decided on Heroku.
She installed Heroku with some help from Rowin and you can see our app live on https://the-relation-ship.herokuapp.com/

For a more detailed explaination on Heroku, check out our [Wiki](https://github.com/Linux-localhost/Chubby-racoon/wiki/topic-deployment).

### Hashing
Hashing passwords is a must have for back-end, with hashing we can encrypt the passwords, wich makes it a bit safer to use, We used bycrpt. 
For a more detailed explaination on Heroku, check out our [Wiki](https://github.com/Linux-localhost/Chubby-racoon/wiki/topic-hashing).

### Helmet

### Routing
Routing makes it a lot easier for everyone to code in seperate files, no long files anymore. We split up our code to make it much cleaner.
[Wiki](https://github.com/Linux-localhost/Chubby-racoon/wiki/topic-routing).


## Live demo
Coming soon

## Build Setup

``` bash
# git clone
git clone https://github.com/Linux-localhost/Chubby-racoon.git

# Cd into project
cd Chubby-racoon

# Install dependencies 
npm install

# serve with hot reload at localhost:3000
Nodemon index.js || npx nodemon index.js
```

## Note:
To run this project you will need our .env file, to get this file please message us on one of the options below

_Contact us on cmd tech slack:_
_[Rowin](https://cmda-tech.slack.com/archives/D011V7V1L1K)_
_[Mike](https://cmda-tech.slack.com/archives/D011Z73CPR8)_ 
_[Rosa](https://cmda-tech.slack.com/team/U0129825PFT)_



_For a detailed explanation on my research please feel free to visit our wiki_ 
_[wiki](https://github.com/Linux-localhost/Chubby-racoon/wiki)_


## Progress:

- [x] Connection with database
- [x] User registration
- [x] User login
- [x] User sessions
- [x] Error messages feedback
- [x] Hashing passwords
- [x] Email verification
- [x] Account activation
- [x] Reset password
- [x] swipe carousel
- [x] Matching | Like | Dislike | Superlike    

## Database structure:

## user

| Tables            | type          | value                      |
| -------------     |:-------------:| -----:                     |    
| _id               | primary key   | auto-increment             |
| username          | string        | Rowin                      |
| email             | string        | rowin_ruizendaal@gmail.com |
| password          | string        | Hashed secret              |     
| gender            | string        | female                     |
| age               | integer       | 22                         |
| city              | string        | Amsterdam                  |
| characteristics   | array         | 0:excited 1:happy 2:goddess|
| picture           | string        | photo-Rowin.png            |
| likes             | object        | userid: value              |
| verified          | boolean       | true or false              |

## First login
| Tables            | type          | value                      |
| -------------     |:-------------:| -----:                     |    
| _id               | primary key   | auto-increment             |
| email             | string        | sample@gmail.com           |




## Resources used:
Argument passed in must be a string of 24 hex characters - I think it is. (2015, May 5). Retrieved May 31, 2020, from https://stackoverflow.com/questions/30051236/argument-passed-in-must-be-a-string-of-24-hex-characters-i-think-it-is

Ben Awad. (2018, May 9). Express Session for Login - Part 15. Retrieved May 30, 2020, from https://www.youtube.com/watch?v=PNuRpf3p_vA

Code Groomer. (2020, January 30). 8. NodeJS, ExpressJS and EJS : Show success and error message using expressjs flash message. Retrieved May 30, 2020, from https://www.youtube.com/watch?v=xVQZAcb_CrE

de Vries, D. (2019, November 30). cmda-bt/be-course-19-20. Retrieved May 30, 2020, from https://github.com/cmda-bt/be-course-19-20/tree/master/examples

Express. (n.d.). Express - Node.js web application framework. Retrieved May 30, 2020, from https://expressjs.com/

express. (2013, July 14). npm: express-flash. Retrieved May 30, 2020, from https://www.npmjs.com/package/express-flash

Flash Message from ejs in Express 4. (2016, September 7). Retrieved May 30, 2020, from https://stackoverflow.com/questions/39370793/flash-message-from-ejs-in-express-4

Flash messaging in Express 4: express-flash vs. custom middleware in ejs, handlebars, or jade. (n.d.). Retrieved May 30, 2020, from https://gist.github.com/brianmacarthur/a4e3e0093d368aa8e423

How to end a session in ExpressJS. (2011, April 6). Retrieved May 31, 2020, from https://stackoverflow.com/questions/5573256/how-to-end-a-session-in-expressjs

How to pass session into views in Node/Express? (2012, December 30). Retrieved May 31, 2020, from https://stackoverflow.com/questions/14087125/how-to-pass-session-into-views-in-node-express

How to send flash messages in Express 4.0? (2014, April 18). Retrieved May 30, 2020, from https://stackoverflow.com/questions/23160743/how-to-send-flash-messages-in-express-4-0

Junior Developer Central. (2019a, July 1). NodeJS Essentials 33: Express Sessions. Retrieved May 30, 2020, from https://www.youtube.com/watch?v=hKYjSgyCd60

Junior Developer Central. (2019b, July 9). NodeJS Essentials 38: Flash Messages. Retrieved May 30, 2020, from https://www.youtube.com/watch?v=BX-SmHfM1M8

Mongodb. (n.d.). MongoDB Node.js Driver. Retrieved May 30, 2020, from https://docs.mongodb.com/drivers/node

mongodb. (n.d.). Queries — MongoDB Node.JS Driver 1.4.9 documentation. Retrieved May 30, 2020, from https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html

Mongodb not updating. (2018, February 14). Retrieved May 31, 2020, from https://stackoverflow.com/questions/48789321/mongodb-not-updating

Moffat, M. (2018, April 19). Nodejs - Re-use MongoDB database connection in routes. Retrieved June 9, 2020, from https://mrvautin.com/re-use-mongodb-database-connection-in-routes/

Node - connect-flash not working on redirect. (2017, January 9). Retrieved May 30, 2020, from https://stackoverflow.com/questions/41558884/node-connect-flash-not-working-on-redirect

Node.js MongoDB Update. (n.d.). Retrieved May 31, 2020, from https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp

npm: body-parser. (2019, April 26). Retrieved May 30, 2020, from https://www.npmjs.com/package/body-parser

npm: cookie-parser. (2020, March 15). Retrieved May 30, 2020, from https://www.npmjs.com/package/cookie-parser

npm: dotenv. (2019, October 16). Retrieved May 30, 2020, from https://www.npmjs.com/package/dotenv

npm: express-session. (2020, April 17). Retrieved May 30, 2020, from https://www.npmjs.com/package/express-session

UIT Startup Immersion. (2017, February 15). Sessions and Node.js with Express. Retrieved May 30, 2020, from https://www.youtube.com/watch?v=aT98NMdAXyk

Update Documents — MongoDB Manual. (n.d.). Retrieved May 31, 2020, from https://docs.mongodb.com/manual/tutorial/update-documents/

