# Chubby-racoon

> Hi, welcome to our repository here you can find our source code for our dating app! We will be making a dating app. This dating app is programmed in node.js

## Team

Mike Hovenier
_[Github](https://github.com/mikehov)_

Rosa Voogd
_[Github](https://github.com/rosavoogd)_

Rowin Danilo Ruizendaal
_[Primary](https://github.com/rowinruizendaal)_  ||  _[Secondary](https://github.com/linux-localhost)_ 


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
- [ ] User registration
- [ ] User login
- [ ] User sessions
- [ ] User Dashboard with data
- [ ] Error messages feedback
- [ ] Update account information
- [ ] Delete account

## Database structure:


| Tables            | type          | value                      |
| -------------     |:-------------:| -----:                     |    
| _id               | primary key   | auto-increment             |
| username          | string        | Rowin                      |
| email             | string        | rowin_ruizendaal@gmail.com |
| password          | string        | secret                     |     
| gender            | string        | female                     |
| age               | integer       | 22                         |
| city              | string        | Amsterdam                  |
| characteristics   | array         | 0:excited 1:happy 2:goddess|
| picture           | string        | photo-Rowin.png            |
| likes             | object        | userid: value              |




## Resources used:

Moffat, M. (2018, April 19). Nodejs - Re-use MongoDB database connection in routes. Retrieved June 9, 2020, from https://mrvautin.com/re-use-mongodb-database-connection-in-routes/