const db = require('./database');
const pgp = require('pg-promise')();
const bcrypt = require('bcryptjs');
const uuidv1 = require('uuid/v1');

const eventController = {};

//------------- Create account button route ------------

//Add submitted user data to USER table
eventController.createAccount = (req, res) => { 

  const salt = bcrypt.genSaltSync(10);
  //##TO DO: add timestamp field to table and here based on where it comes from
  //let timestamp = req.timestamp; //double check where this is coming from


  let username, password, first, last, birthday, user_id, registration_origin, email;

  if(req.user.id){
    registration_origin = 'google';
    user_id = req.user.id;
    username = req.user.displayName;
    first = req.user.name.givenName;
    last = req.user.name.familyName;
    email = req.user.emails[0];
    birthday = '1990-01-01';
    password = bcrypt.hashSync(req.user.id);
  }

  else{
    registration_origin = 'local';
    user_id = uuidv1();
    birthday = req.body.birthday;
    first = req.body.first;
    last = req.body.last;
    password = bcrypt.hashSync(req.body.password,salt);
    email = req.body.email;
    username = req.body.username;
  }

  let values = [user_id, username, password, first, last, birthday, email, registration_origin];
  console.log(values);


  //add timestamp, imageurl
  let queryString = 'INSERT INTO users (users_id, username, password, first, last, birthday, email, registration_origin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);'
  // db.one(queryString, [req.users])
  // .then((data) => { res.status(200).json(data); })
  // .catch(error => { res.status(400).send(error); });
};

//## TO DO:
  //create functionality to hash password 
  //create a JWT and send it to the client


//---------- Welcome / Search Page Routes -------

//----Activities search route: app.post('/activities', eventController.activitySearch);
//Based on user inputs into activity search, query database and return result to the client to be rendered 
eventController.activitySearch = (req, res) => { 
  //##TO DO: add timestamp field to table and here based on where it comes from
  //let timestamp = req.timestamp; //double check where this is coming from
  let title = req.body.title;
  let location = req.body.location;
  let start = req.body.start_time;
  //add endtime and create functionality to search for a range near the start and end times

  //SEARCH: Activities Table by activity type
  //##TO DO: add functionality to search by start_time and location, currently just grabbing, creator_id
  let queryString = `SELECT title, location_text, start_time, description FROM activities WHERE title iLIKE '%${title}%' ORDER BY start_time`;
  db.any(queryString).then((data) => {
    //RESPOND TO CLIENT with Array of objects matching the criteria specified in search
    res.status(200).json(data); }).catch((err) => { res.send(err) });
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
//return res.locals.activityAndUserData to the client
eventController.captureAndStoreUserDataReturnAll = (req, res, next) => {
  let activityId = res.locals.activityAndUserData.activityData.activityId;
  let queryString = `SELECT * FROM USERS where user_id = (SELECT user_id FROM confirmed WHERE activity_id = '${activity_id} AND user_id != ${res.locals.activityAndUserData.activityData.creatorID}) ORDER BY username`;
  console.log("queryString: ", queryString);
  db.one(queryString)
  .then((data) => {
    console.log(queryString);
    res.locals.activityAndUserData.confirmedUserData = data;
    console.log("res.locals.activityAndUserData: ", res.locals.activityAndUserData);
    //send the Activity and userdata data to the client to render the activity detail
    res.status(200).json(res.locals.activityAndUserData); 
  }).catch(error => {
      res.status(400).send(error); 
  });
};

//## TO DO: Controller to add to the search activities route: retrieve message table with relevant activities id in timestamp order

 
//----When User Confirms Participation 

//##FUNCTIONALIRTY UNTESTED
//Controller for post requests to /activity/:id/confirm route
//When user clicks CONFIRM, confirming they are participang in an activity  
//this controller grabs the userID and saves it to the CONFIRMED table
eventController.confirmParticipation = (req, res) => {
  //## double check incoming format, but goal is to grab user_id from request
  let userId = req.body.user_id;
  let activityId = req.body.activity_id;
  let queryString = `INSERT INTO confirmed (user_id, activity_id) VALUES (${userId}, ${activityId})`;
  console.log(queryString);
  db.none(queryString)
  .then(() => {
      res.status(200).send('save successful!'); 
      
  })
  .catch(error => {
      res.status(400).send(error); 
  });
};


//----When User Indicates Interested in Participating
//##FUNCTIONALIRTY UNTESTED

//Controller for post requests to /activity/:id/saveAsInterested route
//When user clicks INTERESTED, indicating they are maybe intereseted in participang in an activity  
//this controller grabs the data and saves it to the INTERESTED table
eventController.saveAsInterested = (req, res) => {
  //unsure of path to grab uweId
  let userId = req.body.user_id;
  let activityId = req.body.activity_id;

  //Tests
  console.log("userId: ", user_id);
  console.log("activityId: ", activityId);

  let queryString = `INSERT INTO interested (user_id, activity_id) VALUES (${userId}, ${activityId})`;
  console.log("queryString: ", queryString);

  db.none(queryString)
    .then((data) => { res.status(200).json(data); })
    .catch(error => { res.status(400).send(error); });
};



//---------- Create Activity Page Route -----------------

//Controller for post requests to /createactivity route
//When user completes activity creator form and clicks submit, 
//this controller grabs the data and saves it to the activities table
eventController.createActivity = (req, res) => {

  console.log("***The createActivity req body is: ", req.body);
  //add timestamp
  //let timestamp = req.body.timestamp;
  let { title, description, location_text, start_time } = req.body;
  console.log("***Destructuring: ", title, description, location_text, start_time);
  console.log("***Type of start time: ", typeof start_time);
  //add lat and log
  //let location_lat = req.body.location_lat;
  //let location_long = req.body.location_long;
  // let user = req.params.id;

  //add timestamp, location_lat, location_long, creator_id' + ${timestamp}', ${location_lat}, ${location_long}, , ${creator_id}
  let queryString = `INSERT INTO activities(title, description, location_text, start_time) VALUES ($1, $2, $3, $4)`

  
  //##TODO: add to query: INSERT INTO confirmed (user_id, activity_id). activity id becomes available in this part. need client to submit userid with request
  console.log("***The query string is: ", queryString);
  db.one(queryString, [title, description, location_text, start_time])
  .then((data) => {  console.log("Success!");  resolve(res.status(200).json(data)) })
  .catch((error) => { console.log(error); res.status(400).send(error); });
};

//----------------------- UNDONE ROUTES 

//----Submit chat message
eventController.submitChatText = (req, res) => {
  res.send("greetings from inside of the submitChatText search controller");
//ADD To: Chats Table, search activityID 
//PARAM to ADD: UserID, Username, message, chatID, activitiesID, date and time submitted
//RETURN + PRINT: all username + messages in order of submitted
};

///----View event creator or attendee profile route
eventController.viewProfile = (req, res) => {
//SEARCH + PARAMS: Activities Table for UserID => Search Users Table by UserID
//RETURN and PRINT: Matching user; username, photo
  res.send("greetings from inside of the viewProfile search controller");
};

//---------- Generate location
//Grab Location
//##Braden to write:
eventController.generateLatAndLong = (req, res) => {
  res.send("greetings from inside of the generateLatAndLong controller");
};


//---------- Login Page Route --------------------------
//----Login button route: app.post('/auth/login', eventController.login)

eventController.login = (req, res, next) => {
  console.log("greetings from inside of the login controller");
  //SEARCH users TABLE for username 
  //hash submitted
  //grab hashed password from database
  //compare the two passwords
  //if found create a JWT and send it to the client, 
  //otherwise don't create a JWT, send to client: password is incorrect

  let queryString = `SELECT * FROM users WHERE users_id = '`+req.user.id +`';`;
  console.log(queryString);
  db.one(queryString)
  .then((data) => { 
    console.log('here is your data:', data);  next(); 
  })
  .catch(error => res.redirect('/'));

};


module.exports = eventController;