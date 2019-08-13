var admin = require('firebase-admin');

//put the service account json file path here
var serviceAccount = require('../project-demo-7dce8-firebase-adminsdk-xv77a-8e938f0a7b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //put the data base url here
  databaseURL: 'https://project-demo-7dce8.firebaseio.com'
});