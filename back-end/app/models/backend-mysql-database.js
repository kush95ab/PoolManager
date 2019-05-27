/**
 * Definitions for DB models related functions.
 * Backend-Controller will call to here and this will call to Utils.
 **/

/* ---------  REQUIRES   -----------*/
var mysql = require('mysql');
var Utils = require('../util/utils');
var DB = require('../config/database.config');


/* -----  CONFIGURATION DATABASE   -------*/
var connection = mysql.createConnection(DB);


function DatabaseMySql() { }

/* ---------  DATABASE - METHODS   -----------*/

// User Model related functions ................................................................
// get user object by user name
DatabaseMySql.prototype.getAuth = function (userName, callback) {
  console.log(userName);

  var utils = new Utils();

  var sqlSelectUser = utils.getSqlAuth(userName);

  connection.query(sqlSelectUser, function (err, resultUser) {
    console.log("in backend Mysql database");
    // console.log(resultUser);
    
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      console.log(resultUser[0].user_Id);
      callback(utils.generateUser(resultUser[0]));    
    }
  });
}

// get user object by user Id
DatabaseMySql.prototype.getUser = function (userId, callback) {
 
  var utils = new Utils();

  var sqlSelectUser = utils.getSqlSelectUser(userId);

  connection.query(sqlSelectUser, function (err, resultUser) {
    console.log("in backend Mysql database");
    // console.log(resultUser);
    
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateUser(resultUser[0]));
      console.log(resultUser[0].user_Id);
    }
  });
}

// get all user objects
DatabaseMySql.prototype.getUsers = function (callback) {

  var utils = new Utils();

  var sqlSelectAllUsers = utils.getSqlSelectAllUsers();
  // console.log("in-getusers- utils "+ sqlSelectAllUsers);

  connection.query(sqlSelectAllUsers, function (err, resultUser) {

    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultUser[i]) {
        resCom.push(utils.generateUser(resultUser[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}


// Insert user object to DB
DatabaseMySql.prototype.insertUser = function (user, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var SqlInsertUser = utils.getSqlInsertUser(user);
    console.log("addUser request identified in backend mysldb");
    console.log(SqlInsertUser);
    
    /* -- Start Inserting User -- */
    connection.query(SqlInsertUser, function (err, result ) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback(result);
        });
      }
    });
  });
}
 

// update user object in DB
DatabaseMySql.prototype.updateUser = function (user, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateUser = utils.getUpdateSqlUser(user);

    /* -- Start updating User -- */
    connection.query(sqlUpdateUser, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("User successfully updated in the system!");
        });
      }
    });
  });
}
//delete user object in DB


DatabaseMySql.prototype.deleteUser = function (user, callback) {

  var utils = new Utils();

  var sqldeleteuser = utils.getDeleteSqlUser(user);

  connection.query(sqldeleteuser, function (err, resultUser) {
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      callback(resultUser);
    }
  });
}


// Student Model related functions ..............................................................

// get students' objects
DatabaseMySql.prototype.getStudents = function (callback) {

  var utils = new Utils();

  var sqlSelectAllStudents = utils.getSqlSelectAllStudents();

  connection.query(sqlSelectAllStudents, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultStudent[i]) {
        resCom.push(utils.generateStudent(resultStudent[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get student object by user id
DatabaseMySql.prototype.getStudent = function (userId, callback) {

  var utils = new Utils();

  var sqlSelectStudent = utils.getSqlSelectStudent(userId);

  connection.query(sqlSelectStudent, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateStudent(resultStudent[0]));
    }
  });
}

// get student object by first name
DatabaseMySql.prototype.getStudentByFname = function (studentFname, callback) {

  var utils = new Utils();

  var sqlSelectStudent = utils.getSqlSelectStudentByFname(studentFname);

  connection.query(sqlSelectStudent, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateStudent(resultStudent[0]));
    }
  });
}

// insert student object to DB
DatabaseMySql.prototype.insertStudent = function (student, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertStudent = utils.getInsertSqlStudent(student);

    /* -- Start insert Student -- */
    connection.query(sqlInsertStudent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete student

DatabaseMySql.prototype.deleteStudent = function (student, callback) {

  var utils = new Utils();

  var sqldeletestudent = utils.getDeleteSqlStudent(student);

  connection.query(sqldeletestudent, function (err, resultStudents) {
    if (err || resultStudents.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete student backend mysql controller" + resultStudents);

      callback(resultStudents);
    }
  });
}

// update student object in DB
DatabaseMySql.prototype.updateStudent = function (student, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateStudent = utils.getUpdateSqlStudent(student);

    /* -- Start update Student -- */
    connection.query(sqlUpdateStudent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student successfully updated in the system!");
        });
      }
    });
  });
}







// Coach Model related functions ..............................................................

// get coaches' objects
DatabaseMySql.prototype.getCoaches = function (callback) {

  var utils = new Utils();

  var sqlSelectAllCoaches = utils.getSqlSelectAllCoaches();

  connection.query(sqlSelectAllCoaches, function (err, resultCoach) {
    if (err || resultCoach.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultCoach[i]) {
        resCom.push(utils.generateCoach(resultCoach[i]));
        i = i + 1;
      }
      callback(resCom);

    }
  });
}

// get coach object by user id
DatabaseMySql.prototype.getCoach = function (userId, callback) {

  var utils = new Utils();

  var sqlSelectCoach = utils.getSqlSelectCoach(userId);

  connection.query(sqlSelectCoach, function (err, resultCoach) {
    if (err || resultCoach.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateCoach(resultCoach[0]));
    }
  });
}

// get coach object by first name
DatabaseMySql.prototype.getCoachByFname = function (coachFname, callback) {

  var utils = new Utils();

  var sqlSelectCoach = utils.getSqlSelectCoachByFname(coachFname);

  connection.query(sqlSelectCoach, function (err, resultCoach) {
    if (err || resultCoach.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateCoach(resultCoach[0]));
    }
  });
}

// insert coach object to DB
DatabaseMySql.prototype.insertCoach = function (coach, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertCoach = utils.getInsertSqlCoach(coach);

    /* -- Start insert Coach -- */
    connection.query(sqlInsertCoach, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Coach successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete coach

DatabaseMySql.prototype.deleteCoach = function (coach, callback) {

  var utils = new Utils();

  var sqldeletecoach = utils.getDeleteSqlCoach(coach);

  connection.query(sqldeletecoach, function (err, resultCoachs) {
    if (err || resultCoachs.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete coach backend mysql controller" + resultCoachs);

      callback(resultCoachs);
    }
  });
}

// update coach object in DB
DatabaseMySql.prototype.updateCoach = function (coach, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateCoach = utils.getUpdateSqlCoach(coach);

    /* -- Start update Coach -- */
    connection.query(sqlUpdateCoach, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Coach successfully updated in the system!");
        });
      }
    });
  });
}







// Poolmanager Model related functions ..............................................................

// get poolmanagers' objects
DatabaseMySql.prototype.getPoolmanagers = function (callback) {

  var utils = new Utils();

  var sqlSelectAllPoolmanagers = utils.getSqlSelectAllPoolmanagers();

  connection.query(sqlSelectAllPoolmanagers, function (err, resultPoolmanager) {
    if (err || resultPoolmanager.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultPoolmanager[i]) {
        resCom.push(utils.generatePoolmanager(resultPoolmanager[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get poolmanager object by user id
DatabaseMySql.prototype.getPoolmanager = function (userId, callback) {

  var utils = new Utils();

  var sqlSelectPoolmanager = utils.getSqlSelectPoolmanager(userId);

  connection.query(sqlSelectPoolmanager, function (err, resultPoolmanager) {
    if (err || resultPoolmanager.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generatePoolmanager(resultPoolmanager[0]));
    }
  });
}

// get poolmanager object by first name
DatabaseMySql.prototype.getPoolmanagerByFname = function (poolmanagerFname, callback) {

  var utils = new Utils();

  var sqlSelectPoolmanager = utils.getSqlSelectPoolmanagerByFname(poolmanagerFname);

  connection.query(sqlSelectPoolmanager, function (err, resultPoolmanager) {
    if (err || resultPoolmanager.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generatePoolmanager(resultPoolmanager[0]));
    }
  });
}

// insert poolmanager object to DB
DatabaseMySql.prototype.insertPoolmanager = function (poolmanager, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertPoolmanager = utils.getInsertSqlPoolmanager(poolmanager);

    /* -- Start insert Poolmanager -- */
    connection.query(sqlInsertPoolmanager, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Poolmanager successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete poolmanager

DatabaseMySql.prototype.deletePoolmanager = function (poolmanager, callback) {

  var utils = new Utils();

  var sqldeletepoolmanager = utils.getDeleteSqlPoolmanager(poolmanager);

  connection.query(sqldeletepoolmanager, function (err, resultPoolmanager) {
    if (err || resultPoolmanager.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete poolmanager backend mysql controller" + resultPoolmanager);

      callback(resultPoolmanager);
    }
  });
}

// update poolmanager object in DB
DatabaseMySql.prototype.updatePoolmanager = function (poolmanager, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdatePoolmanager = utils.getUpdateSqlPoolmanager(poolmanager);

    /* -- Start update Poolmanager -- */
    connection.query(sqlUpdatePoolmanager, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Poolmanager successfully updated in the system!");
        });
      }
    });
  });
}







// Skill Model related functions ..............................................................

// get skills' objects
DatabaseMySql.prototype.getSkills = function (callback) {

  var utils = new Utils();

  var sqlSelectAllSkills = utils.getSqlSelectAllSkills();

  connection.query(sqlSelectAllSkills, function (err, resultSkill) {
    if (err || resultSkill.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultSkill[i]) {
        resCom.push(utils.generateSkill(resultSkill[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get skill object by skill id
DatabaseMySql.prototype.getSkill = function (skillId, callback) {

  var utils = new Utils();

  var sqlSelectSkill = utils.getSqlSelectSkill(skillId);

  connection.query(sqlSelectSkill, function (err, resultSkill) {
    if (err || resultSkill.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateSkill(resultSkill[0]));
    }
  });
}

// get skill object by skill name
DatabaseMySql.prototype.getSkillByFname = function (skillName, callback) {

  var utils = new Utils();

  var sqlSelectSkill = utils.getSqlSelectSkillByFname(skillName);

  connection.query(sqlSelectSkill, function (err, resultSkill) {
    if (err || resultSkill.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateSkill(resultSkill[0]));
    }
  });
}

// insert skill object to DB
DatabaseMySql.prototype.insertSkill = function (skill, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertSkill = utils.getInsertSqlSkill(skill);

    /* -- Start insert Skill -- */
    connection.query(sqlInsertSkill, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Skill successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete skill object in DB

DatabaseMySql.prototype.deleteSkill = function (skill, callback) {

  var utils = new Utils();

  var sqldeleteskill = utils.getDeleteSqlSkill(skill);

  connection.query(sqldeleteskill, function (err, resultSkills) {
    if (err || resultSkills.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete skill backend mysql controller" + resultSkills);

      callback(resultSkills);
    }
  });
}

// update skill object in DB
DatabaseMySql.prototype.updateSkill = function (skill, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateSkill = utils.getUpdateSqlSkill(skill);

    /* -- Start update Skill -- */
    connection.query(sqlUpdateSkill, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Skill successfully updated in the system!");
        });
      }
    });
  });
}








// Student_skill Model related functions ..............................................................

// get student_skills' objects
DatabaseMySql.prototype.getStudent_skills = function (callback) {

  var utils = new Utils();

  var sqlSelectAllStudent_skills = utils.getSqlSelectAllStudent_skills();

  connection.query(sqlSelectAllStudent_skills, function (err, resultStudent_skill) {
    if (err || resultStudent_skill.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultStudent_skill[i]) {
        resCom.push(utils.generateStudent_skill(resultStudent_skill[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get student_skill object by user id
DatabaseMySql.prototype.getStudent_skill = function (userId, callback) {

  var utils = new Utils();

  var sqlSelectStudent_skill = utils.getSqlSelectStudent_skill(userId);

  connection.query(sqlSelectStudent_skill, function (err, resultStudent_skill) {
    if (err || resultStudent_skill.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateStudent_skill(resultStudent_skill[0]));
    }
  });
}

// get student_skill object by user ID and 

// DatabaseMySql.prototype.getStudent_skillByFname = function (student_skillFname, callback) {

//   var utils = new Utils();

//   var sqlSelectStudent_skill = utils.getSqlSelectStudent_skillByFname(student_skillFname);

//   connection.query(sqlSelectStudent_skill, function (err, resultStudent_skill) {
//     if (err || resultStudent_skill.length == 0) {
//       callback(null, err);
//     } else {
//       callback(utils.generateStudent_skill(resultStudent_skill[0]));
//     }
//   });
// }

// insert student_skill object to DB
DatabaseMySql.prototype.insertStudent_skill = function (student_skill, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertStudent_skill = utils.getInsertSqlStudent_skill(student_skill);

    /* -- Start insert Student_skill -- */
    connection.query(sqlInsertStudent_skill, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student_skill successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete student_skill

DatabaseMySql.prototype.deleteStudent_skill = function (student_skill, callback) {

  var utils = new Utils();

  var sqldeletestudent_skill = utils.getDeleteSqlStudent_skill(student_skill);

  connection.query(sqldeletestudent_skill, function (err, resultStudent_skills) {
    if (err || resultStudent_skills.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete student_skill backend mysql controller" + resultStudent_skills);

      callback(resultStudent_skills);
    }
  });
}

// update student_skill object in DB
DatabaseMySql.prototype.updateStudent_skill = function (student_skill, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateStudent_skill = utils.getUpdateSqlStudent_skill(student_skill);

    /* -- Start update Student_skill -- */
    connection.query(sqlUpdateStudent_skill, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student_skill successfully updated in the system!");
        });
      }
    });
  });
}












// Event Model related functions ..............................................................

// get events' objects
DatabaseMySql.prototype.getEvents = function (callback) {

  var utils = new Utils();

  var sqlSelectAllEvents = utils.getSqlSelectAllEvents();

  connection.query(sqlSelectAllEvents, function (err, resultEvent) {
    if (err || resultEvent.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultEvent[i]) {
        resCom.push(utils.generateEvent(resultEvent[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get event object by event date
DatabaseMySql.prototype.getEvent = function (eventDate, callback) {

  var utils = new Utils();

  var sqlSelectEvent = utils.getSqlSelectEvent(eventDate);

  connection.query(sqlSelectEvent, function (err, resultEvent) {
    if (err || resultEvent.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateEvent(resultEvent[0]));
    }
  });
}

// // get event object by event_date
// DatabaseMySql.prototype.getEventByFname = function (event_date, callback) {

//   var utils = new Utils();

//   var sqlSelectEvent = utils.getSqlSelectEventByDate(event_date);

//   connection.query(sqlSelectEvent, function (err, resultEvent) {
//     if (err || resultEvent.length == 0) {
//       callback(null, err);
//     } else {
//       callback(utils.generateEvent(resultEvent[0]));
//     }
//   });
// }

// insert event object to DB
DatabaseMySql.prototype.insertEvent = function (event, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertEvent = utils.getInsertSqlEvent(event);

    /* -- Start insert Event -- */
    connection.query(sqlInsertEvent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Event successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete event object in DB by eventId 

DatabaseMySql.prototype.deleteEvent = function (event, callback) {

  var utils = new Utils();

  var sqldeleteevent = utils.getDeleteSqlEvent(event);

  connection.query(sqldeleteevent, function (err, resultEvents) {
    if (err || resultEvents.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete event backend mysql controller" + resultEvents);

      callback(resultEvents);
    }
  });
}

// update event object in DB by eventId
DatabaseMySql.prototype.updateEvent = function (event, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateEvent = utils.getUpdateSqlEvent(event);

    /* -- Start update Event -- */
    connection.query(sqlUpdateEvent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Event successfully updated in the system!");
        });
      }
    });
  });
}












// Image Model related functions ..............................................................

// get images' objects 
DatabaseMySql.prototype.getImages = function (callback) {

  var utils = new Utils();

  var sqlSelectAllImages = utils.getSqlSelectAllImages();

  connection.query(sqlSelectAllImages, function (err, resultImage) {
    if (err || resultImage.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultImage[i]) {
        resCom.push(utils.generateImage(resultImage[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get image object by eventID
DatabaseMySql.prototype.getImage = function (eventId, callback) {

  var utils = new Utils();

  var sqlSelectImage = utils.getSqlSelectImage(eventId);

  connection.query(sqlSelectImage, function (err, resultImages) {
    if (err || resultImages.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateImage(resultImages[0]));
    }
  });
}

// get image object by first name
DatabaseMySql.prototype.getImageByFname = function (imageFname, callback) {

  var utils = new Utils();

  var sqlSelectImage = utils.getSqlSelectImageByFname(imageFname);

  connection.query(sqlSelectImage, function (err, resultImage) {
    if (err || resultImage.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateImage(resultImage[0]));
    }
  });
}

// insert image object to DB
DatabaseMySql.prototype.insertImage = function (image, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) {
      callback(null, err);
    }

    var sqlInsertImage = utils.getInsertSqlImage(image);

    /* -- Start insert Image -- */
    connection.query(sqlInsertImage, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Image successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete image object in DB

DatabaseMySql.prototype.deleteImage = function (image, callback) {

  var utils = new Utils();

  var sqldeleteimage = utils.getDeleteSqlImage(image);

  connection.query(sqldeleteimage, function (err, resultImages) {
    if (err || resultImages.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete image backend mysql controller" + resultImages);

      callback(resultImages);
    }
  });
}

// update image object in DB
DatabaseMySql.prototype.updateImage = function (image, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateImage = utils.getUpdateSqlImage(image);

    /* -- Start update Image -- */
    connection.query(sqlUpdateImage, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Image successfully updated in the system!");
        });
      }
    });
  });
}







/* CRUD MODELS FOR NORTIFICATIONS */
//GET NORTIFICATIONS

DatabaseMySql.prototype.getNotification = function (callback) {

  console.log("backendmysql controller notifications");
  var utils = new Utils();

  var sqlSelectNotifications = utils.getSqlSelectNotifications();

  connection.query(sqlSelectNotifications, function (err, resultNotifications) {
    if (err || resultNotifications.length == 0) {
      callback(null, err);
    } else {
      callback(resultNotifications);
    }
  });
}

module.exports = DatabaseMySql;
