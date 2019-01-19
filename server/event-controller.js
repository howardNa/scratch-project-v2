const db = require('./database');
const pgp = require('pg-promise')();

const eventController = {};


//---------- Welcome / Search Page Routes -------

//----Search activities controller: 

//SEARCH: Activities Table
//SEARCH PARAMS: Activity type, location, start time, end time
//RETURN and PRINT: Matching activities; data: Title, Location, Start Time, End Time, Description
// RETURN FOR INTERNAL: User ID 


// SEARCH: Users Table for creator
// ~ SEARCH PARAMS: User id (from Activities Table Search)
// ~ RETURN: Matching profile; Username + Photo

eventController.activitySearch = (req, res) => { 
  let title = req.body.title;
  let location = req.body.location;
  let start = req.body.start_time;
  let end = req.body.end_time; 


  let queryString = `SELECT title, location_text, start_time, end_time, description, creator_id FROM activities WHERE title iLIKE '%${title}%' AND start_time >= '${start}' AND end_time <= '${end}'`;
 // FROM users WHERE created < $1 AND active = $2'
 console.log(queryString);

  db.any(queryString).then((data) => {
    let dataObj = data;
    let queryString2 = `SELECT username, imageurl FROM users WHERE user'%{}%`;
    console.log(dataObj);

    db.any(queryString2).then
}).catch((err) => { res.send(err) });
};


//----Activity detail display route, accessable once search is populated

//SEARCH: Activities Table
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
  let end_time = req.body.end_time;
  let creator_id = req.body.creator_id;

  //sign ups table??

  let queryString = `INSERT INTO activities (timestamp, title, description, location_text, location_lat, location_long, start_time, end_time, creator_id) VALUES ('${timestamp}', '${title}', '${description}', '${location_text}', ${location_lat}, ${location_long}, '${start_time}', '${end_time}', ${creator_id})`;
  console.log(queryString);
  //($1, $2, $3, $4, $5, $6, $7, $8, $9)';
  //[timestamp, title, description, location_text, location_lat, location_long, start_time, end_time, creator_id]
  db.none(queryString)
  .then(() => {
      res.status(200).send('save successful!'); 
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

  let string = 'INSERT INTO users (timestamp, username, password, first, last, birthday, imageurl) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  db.none(string, [timestamp, username, password, first, last, birthday, imageurl])
  .then(() => {
      res.status(200).send('save successful!'); // print new user id;
  })
  .catch(error => {
      res.status(400).send(error); // print error;
  });
};



module.exports = eventController;