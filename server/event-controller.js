const db = require('./database');
const pgp = require('pg-promise')();

const eventController = {};


//---------- Welcome / Search Page Routes -------

//Search activities route app.post('/activities', eventController.activitySearch);
//SEARCH: Activities Table by activity type
//RETURNS TO CLIENT: Array of objects matching the searched type with the keys:
//title, location_text, start_time, description, creator_id
eventController.activitySearch = (req, res) => { 
  let title = req.body.title;
  let location = req.body.location;
  let start = req.body.start_time;
  let queryString = `SELECT title, location_text, start_time, description, creator_id FROM activities WHERE title iLIKE '%${title}%'`;
  db.any(queryString).then((data) => {
    res.status(200).json(data);
  }).catch((err) => { res.send(err) });
};

//----Activity detail display route, accessable once search is populated

//SEARCH: Activities Table by ActivityID
let queryString 
//SEARCH PARAMS: ActivityID 
//RETURN and PRINT: Matching activities; data: Title, Location, Start Time, End Time, Description
//RETURN: CreatorID + UserIDs

// SEARCH: Messages Table
// SEARCH PARAMS: ActivityID
// RETURN + PRINT: UserName + Messages in order of submit

//SEARCH: USERS Table
//SEARCH PARAMS: ~Creator + UserID(s)
//RETURN + PRINT: Username, photo url

eventController.activityDetailPageDisplay = (req, res) => {
  res.send("greetings from inside of the activityDetailPageDisplay search controller");


};

//---------- Activity Detail Page Routes ---------------


//----Confirm participation + save to profile

//Controller for post requests to /activity/:id/confirm route
//When user clicks submit, confirming they are participang in an activity  
//this controller grabs the data and saves it to the CONFIRMED table
eventController.confirmParticipation = (req, res) => {

  //grab user_id from ?
  //grab activity id from?

  //CONFIRMED table elements to add
  let user_id  = req.body.user_id;
  let activity_id = req.body.activity_id;

  let queryString = `INSERT INTO confirmed (user_id, activity_id) VALUES (${user_id}, ${activity_id})`;
  console.log(queryString);
  db.none(queryString)
  .then(() => {
      res.status(200).send('save successful!'); 
  })
  .catch(error => {
      res.status(400).send(error); 
  });
};


//----Save as maybe participating
//Controller for post requests to /activity/:id/maybe route
//When user clicks submit, indicating they are maybe intereseted in participang in an activity  
//this controller grabs the data and saves it to the INTERESTED table
eventController.saveAsInterested = (req, res) => {
  let user_id  = req.body.user_id;
  let activity_id = req.body.activity_id;

  console.log(user_id);
  console.log(activity_id);

  let queryString = `INSERT INTO interested (user_id, activity_id) VALUES (${user_id}, ${activity_id})`;
  console.log(queryString);

  db.none(queryString)
    .then(() => { res.status(200).send('save successful!'); })
    .catch(error => { res.status(400).send(error); });
};

//----Submit chat message
//ADD To: Chats Table, search activityID 
//PARAM to ADD: UserID, Username, message, chatID, activitiesID, date and time submitted
//RETURN + PRINT: all username + messages in order of submitted
eventController.submitChatText = (req, res) => {
  res.send("greetings from inside of the submitChatText search controller");
};

///----View event creator or attendee profile route
//SEARCH + PARAMS: Activities Table for UserID => Search Users Table by UserID
//RETURN and PRINT: Matching user; username, photo
eventController.viewProfile = (req, res) => {
  res.send("greetings from inside of the viewProfile search controller");

};

//---------- Create Activity Page Route -----------------

//Controller for post requests to /createactivity route
//When user completes activity creator form and clicks submit, 
//this controller grabs the data and saves it to the activities table
eventController.createActivity = (req, res) => {
  //activities table elements to add
  let timestamp = req.body.timestamp;
  let title = req.body.title;
  let description = req.body.description;
  let location_text = req.body.location_text;
  let location_lat = req.body.location_lat;
  let location_long = req.body.location_long;
  let start_time = req.body.start_time;
  let creator_id = req.params.id;


  let queryString = `INSERT INTO activities (timestamp, title, description, location_text, location_lat, location_long, start_time, creator_id) VALUES ('${timestamp}', '${title}', '${description}', '${location_text}', ${location_lat}, ${location_long}, '${start_time}', ${creator_id}) RETURNING *`;
  db.one(queryString)
  .then((data) => {
    console.log(data);
      res.status(200).send(data); 
  })
  .catch(error => {
      res.status(400).send(error); 
  });
};

//----Generate location
//Grab Location
//##Braden to write:
//
//
eventController.generateLatAndLong = (req, res) => {
  res.send("greetings from inside of the generateLatAndLong controller");
};


//---------- Login Page Routes --------------------------

//----Login button route
//SEARCH users TABLE for username 
//hash submitted
//grab hashed password from database
//compare the two passwords
//if found create a JWT and send it to the client, 
//otherwise don't create a JWT, send to client: password is incorrect
eventController.login = (req, res) => {
  res.send("greetings from inside of the login controller");

};

//----Create account button route
//Add data to USER TABLE
//Params to add: 

  //usergenerated: username, first, last, birthday
  //function: transform birthday to proper date



eventController.createAccount = (req, res) => { 
  console.log(req);
  //TO DO
  //function: grab and convert: timestamp
  //function: hash password
  //## BRADEN: create a JWT and send it to the client

  let timestamp = req.body.timestamp;
  let username = req.body.username;
  let password = req.body.password;
  let first = req.body.first;
  let last = req.body.last;
  let birthday = req.body.birthday;
  let imageurl = req.body.imageurl;

  let queryString = `INSERT INTO users (timestamp, username, password, first, last, birthday, imageurl) VALUES ('${timestamp}', '${username}', '${password}', '${first}', '${last}', '${birthday}', '${imageurl}') RETURNING *`;
  console.log(queryString)

  db.one(queryString)
  .then((data) => {
    console.log(data);
      res.status(200).send(data); 
  })
  .catch(error => {
      res.status(400).send(error); // print error;
  });
};



module.exports = eventController;