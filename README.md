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

### Helmet

### Routing

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
- [ ] Reset password 

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

Moffat, M. (2018, April 19). Nodejs - Re-use MongoDB database connection in routes. Retrieved June 9, 2020, from https://mrvautin.com/re-use-mongodb-database-connection-in-routes/
