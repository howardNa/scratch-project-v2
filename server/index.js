require('dotenv').config();
const express = require('express')
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const server = http.createServer(app);
const PORT = 8000;
const db = require('./database');
const eventController = require('./event-controller');
const io = require('socket.io').listen(server);

const path = require('path');
require('dotenv').config();


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
  clientID: '993502270043-tde7j9017fc3vkleork8ib8r9vef194k.apps.googleusercontent.com',
  clientSecret:  'D-bz3BLMM3qSZ-IPF_y_Xwdm',
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);

  return cb(null, profile);
}
));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());




//---------- Login Page Routes --------------------------

//Create account button route
app.post('/auth/create', eventController.createAccount);

//Login button route
//###Route not connected awaiting loginpage creation
//app.post('/auth/login', eventController.login);

app.get('/auth/google' ,passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'), 
function(req,res) {
  console.log('TRY REDIRECTING')
  res.redirect('/');
})

//---------- Create Activity Page Route -----------------

//Create activity button route
app.post('/createactivity', eventController.createActivity);

//###Create functionality to link map and chain to above ADD eventController.generateLatAndLong


//---------- Routes on Welcome and Search Page Routes -------

//Search activities route
app.post('/activities', eventController.activitySearch);

//Activity detail display route, accessable once search is populated
app.get('/activity/:id', eventController.captureAndStoreActivityData, eventController.captureAndStoreCreatorData, eventController.captureAndStoreUserDataReturnAll)


//---------- Routes on the Activity Detail Page  ---------------

//Confirm participation + save to profile route
app.post('/activity/:id/confirm', eventController.confirmParticipation);

//Save event as a maybe to profile route
app.post('/activity/:id/interested', eventController.saveAsInterested);

//Submit chat text route
app.post('/activity/:id/submit', eventController.submitChatText);

//View event creator and attendee profile route
app.get('/profile/:id', eventController.viewProfile);

// '/' route' serve static html file
app.use(express.static(path.resolve(__dirname, '../client')));


//---------- Chat Box Using Websockets ---------------


let users = [];
let connections = [];

io.sockets.on("connection", function(socket){
  connections.push(socket);
  socket.emit('send message', "hello world")
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length )
  })

  socket.on('send message', function(data){
    console.log("This is socket data:", data);
    io.sockets.emit('send message', data);
  })
  
})



//---------- Server ---------------
server.listen(PORT, () => {
  console.log(`Connected and listening on ${PORT}`);
})