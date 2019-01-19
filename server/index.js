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



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


//---------- Welcome / Search Page Routes -------

//Search activities route
app.post('/activities', eventController.activitySearch);

//Activity detail display route, accessable once search is populated
app.get('/activity/:id', eventController.activityDetailPageDisplay);



//---------- Activity Detail Page Routes ---------------

//Confirm participation + save to profile route
app.post('/activity/:id/confirm', eventController.confirmParticipation);

//Save event as a maybe to profile route
app.post('/activity/:id/maybe', eventController.saveAsMaybe);

//Submit chat text route
app.post('/activity/:id/submit', eventController.submitChatText);

//View event creator and attendee profile route
app.get('/profile/:id', eventController.viewProfile);



//---------- Create Activity Page Route -----------------

//Create activity button route
//Create activity + generate location
app.post('/createactivity', eventController.createActivity, eventController.generateLatAndLong);



//---------- Login Page Routes --------------------------

//Login button route
app.post('/auth/login', eventController.login);

//Create account button route
app.post('/auth/create', eventController.createAccount);



server.listen(PORT, () => {
  console.log(`Connected and listening on ${PORT}`);
})