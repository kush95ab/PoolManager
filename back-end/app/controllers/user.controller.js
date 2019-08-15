const dbref = require('../models/db');
var UserModel = require('../models/userModel.js');

var admin = require('firebase-admin');

var data = {
  "got it working": "yeah"
}

/*
console.log(dbref.ref);
/*var uid = dbref.child('movies').push().key;
var movie = {
  user_id: "chamod",
  user_name: "dias"
 }
var updates = {};
updates['/movies/' + uid] = movie;

firebase.database().ref().update(updates);
return firebase.database().ref('/movies/' + uid).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().user_name) || 'Anonymous';
  console.log(username);
});
*/

module.exports = login;

function login(req, res) {
  UserModel.findUser(req, res);
  res.send(res);
}

module.exports.login = login;

function isAuthenticated(req, res, next) {
  //check if the user is logged in and if then attach to the request, if not redirect to login page
  // idToken comes from the client app (shown above)
  //console.log(req.body)

  admin.auth().verifyIdToken(req.body.token)
    .then((claims) => {
      console.log(claims);
      if (typeof claims.email !== 'undefined' &&
        typeof claims.email_verified !== 'undefined' &&
        claims.email_verified) {
        if (claims.userRole == undefined) {
          admin.auth().setCustomUserClaims(claims.sub, {

            userRole: "MA"
          }).then(value => {
            console.log("user role claims added");
            return res.json({
              success: true,
              token: req.body.token,
            })
            
          }).catch(function (error) {
            console.log(error);
          })
        } else {
          console.log("user roles not null");
          return res.json({
            success: true,
            token: req.body.token,
          })
        }

      } else {
        console.log("email not verified");
        return res.json({
          success: false,
          error: "email not verified",
        })       
      }
    }).catch(function (error) {
      // Handle error
      return res.json({
        success: false,
        error: error,
      })
    });
}

module.exports.isAuthenticated = isAuthenticated;

function createUser(req, res) {
  console.log("create user firebase func called")
  console.log(req.body.user.username);

  UserModel.createUser(req, res);
}

module.exports.createUser = createUser;

function deleteUser(req, res) {
  console.log("delete user firebase func called")
  console.log(req.body);

  UserModel.deleteUser(req, res);
}

module.exports.deleteUser = deleteUser;