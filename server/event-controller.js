const db = require('./database');
const pgp = require('pg-promise')();

const eventController = {};


//---------- Welcome / Search Page Routes -------

//----Activities search route: app.post('/activities', eventController.activitySearch);
//Based on user inputs into activity search, query database and return result to the client to be rendered 
eventController.activitySearch = (req, res) => { 
  //capture the time_stamp, title, location, and start_time from req
  let time_stamp = req.timestamp;
  let title = req.body.title;
  let location = req.body.location;
  let start = req.body.start_time;
  //SEARCH: Activities Table by activity type
  let queryString = `SELECT title, location_text, start_time, description, creator_id FROM activities WHERE title iLIKE '%${title}%' ORDER BY start_time`;
  db.any(queryString).then((data) => {
    //RESPOND TO CLIENT with Array of objects matching the criteria specified in search
    res.status(200).json(data);
  }).catch((err) => { res.send(err) });
};



//----Activity detail display route, app.get('/activity/:id', eventController.activityDetailPageDisplay);

//First controller: Based on activity clicked on by the user, query the activities table 
//and save all returned data to res.locals.activitydata;

eventController.captureAndStoreActivityData = (req, res, next) => {
  //###TO DO ONCE YOU SEE DATA FORMAT: capture the activityID from req
  let activityId;
  let queryString = `SELECT activityId FROM activities RETURNING *`; 
  db.one(queryString)
  .then((data) => {
    console.log("data from activities table activityDetailDisplay controller", data);
    res.locals.activityAndUserData.activityData = data;
    next();
  });
};


//Second controller: Search for the user that created the event, and return that info 
//save all returned data to res.locals.activityAndUserData.creatorData;

eventController.captureAndStoreCreatorData = (req, res, next) => {
  let user_id = res.locals.activityAndUserData.activityData.creatorID;
  let queryString = `SELECT * FROM users WHERE user_id = ${user_id} RETURNING *`;
    db.one(queryString)
    .then((data) => {
      console.log("data from captureAndStoreCreatorData from captureAndStoreCreatorData", data);
      res.locals.activityAndUserData.activityData.creatorData = data;
      next();
    });
  };
   
//Third controller: Search the confirmed table for users matching the activityId 
//save all returned data to res.locals.activityAndUserData.confirmedUserData;
eventController.captureAndStoreUserData = (req, res, next) => {

    `SELECT * FROM USERS where user_id = (SELECT user_id FROM interested WHERE activity_id = ${activity_id}) ORDER BY username`;

  }).then((data) => {
    console.log("data from users table controller", data);
    let activityAndUserData = {}
    activityAndUserData.activityData = activityData;
    activityAndUserData.userData = data;
    //send the Activity and User Data to the client to render the activity detail
    res.status(200).send(data); 
  }).catch(error => {
      res.status(400).send(error); 
  });
};






 

  //db.one
  //SEARCH: Activities Table by ActivityID
  //SEARCH PARAMS: ActivityID 
  //RETURN and PRINT: Matching activities; data: Title, Location, Start Time, End Time, Description
  //RETURN: CreatorID + UserIDs

  // SEARCH: Messages Table
  // SEARCH PARAMS: ActivityID
  // RETURN + PRINT: UserName + Messages in order of submit

  //SEARCH: USERS Table
  //SEARCH PARAMS: ~Creator + UserID(s)
  //RETURN + PRINT: Username, photo url
};

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
//Controller for post requests to /activity/:id/saveAsInterested route
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


  let queryString = `INSERT INTO activities (timestamp, title, description, location_text, location_lat, location_long, start_time, creator_id) VALUES ('${timestamp}', '${title}', '${description}', '${location_text}', ${location_lat}, ${location_long}, '${start_time}', ${creator_id}) RETURNING *;
  INSERT INTO confirmed (user_id, activity_id)`;
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