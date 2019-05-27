/**
 * Main Controller for backend query functions
 * Routers will call to this controller and this will call to Database Model
 */


/* ---------  REQUIRES   -----------*/

// var Coach = require('../entities/coach');
// var Poolmanager = require('../entities/poolManager');
// var Eevnt = require('../entities/event');
// var Image = require('../entities/image');
// var Skill = require('../entities/skill');
// var Student = require('../entities/student');
// var Student_skill = require('../entities/studentSkill');
// var User = require('../entities/user');

var DAOMySql = require('../models/backend-mysql-database');


/* ---------  CONTROLLERS - METHODS   -----------*/

function BackendController() { }


/* User Authentcation function */
BackendController.prototype.auth = function (req, callback) {

    var daoMsql = new DAOMySql();
    console.log(req);

    daoMsql.getAuth(req.userName, function (result, err) {
        console.log("Enter to the get user function" + result.userId);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            // console.log("** no errors");
            if (result.userPassword == req.userPassword) {
                console.log("**** password matched");
                callback(result);
            } else {
                console.log("**** password mismatched");
                callback(null, err);
            }
        }
    });
}




// Get user by user_id object from DB model
BackendController.prototype.selectUser = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getUser(req.userId, function (result, err) {
        console.log("Enter to the get user function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL users' objects from DB model
BackendController.prototype.getUsers = function (callback) {

    var daoMsql = new DAOMySql();
    
    console.log("Enter to the get users function");

    daoMsql.getUsers(function (result, err) {
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Insert user
BackendController.prototype.insertUser = function (req, callback) {
 
    var daoMsql = new DAOMySql();

    daoMsql.insertUser(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Update user object from DB model
BackendController.prototype.updateUser = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateUser(user, function (result, err) {
    daoMsql.updateUser(req, function (result, err) {
        console.log("Enter to the update user function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}





/** DELETE user */
BackendController.prototype.deleteUser = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteUser(req, function (result, err) {
        console.log("connecting to database and deleting user" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("user deleted");

            callback(result);
        }
    });
}







/* CRUD operations for student */

//Insert student
BackendController.prototype.insertStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertStudent(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}


// Get student by id object from DB model
BackendController.prototype.getStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getStudent(req.userId, function (result, err) {
        console.log("Enter to the get student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL students' objects from DB model
BackendController.prototype.getStudents = function (callback) {

    var daoMsql = new DAOMySql();
    daoMsql.getStudents(function (result, err) {
        console.log("Enter to the get students function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update student object from DB model
BackendController.prototype.updateStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateStudent(student, function (result, err) {
    daoMsql.updateStudent(req, function (result, err) {
        console.log("Enter to the update student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}



/** Delete Student object from DB model */
BackendController.prototype.deleteStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteStudent(req, function (result, err) {
        console.log("connecting to database and deleting student" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("student deleted");

            callback(result);
        }
    });
}








/* CRUD operations for coach */

//Insert coach
BackendController.prototype.insertCoach = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertCoach(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get coach by id object from DB model
BackendController.prototype.getCoach = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getCoach(req.userId, function (result, err) {
        console.log("Enter to the get coach function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL coaches objects from DB model
BackendController.prototype.getCoaches = function (callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getCoaches(function (result, err) {
        console.log("Enter to the get coachs function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update coach object from DB model
BackendController.prototype.updateCoach = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateCoach(coach, function (result, err) {
    daoMsql.updateCoach(req, function (result, err) {
        console.log("Enter to the update coach function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

/** Delete Coach object from DB model */
BackendController.prototype.deleteCoach = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteCoach(req, function (result, err) {
        console.log("connecting to database and deleting coach" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("coach deleted");

            callback(result);
        }
    });
}








/* CRUD operations for poolmanager */

//Insert poolmanager
BackendController.prototype.insertPoolmanager = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertPoolmanager(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get poolmanager by id object from DB model
BackendController.prototype.getPoolmanager = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getPoolmanager(req.userId, function (result, err) {
        console.log("Enter to the get poolmanager function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL poolmanagers' objects from DB model
BackendController.prototype.getPoolmanagers = function (callback) {

    var daoMsql = new DAOMySql();
    daoMsql.getPoolmanagers(function (result, err) {
        console.log("Enter to the get poolmanagers function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update poolmanager object from DB model
BackendController.prototype.updatePoolmanager = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updatePoolmanager(poolmanager, function (result, err) {
    daoMsql.updatePoolmanager(req, function (result, err) {
        console.log("Enter to the update poolmanager function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
/** Delete poolmanager object from DB model */
BackendController.prototype.deletePoolmanager = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deletePoolmanager(req, function (result, err) {
        console.log("connecting to database and deleting poolmanager" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("poolmanager deleted");

            callback(result);
        }
    });
}









/* CRUD operations for event */

//Insert event
BackendController.prototype.insertEvent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertEvent(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get event by id object from DB model
BackendController.prototype.getEvent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getEvent(req.userId, function (result, err) {
        console.log("Enter to the get event function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL events' objects from DB model
BackendController.prototype.getEvents = function (callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getEvents(function (result, err) {
        console.log("Enter to the get events function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update event object from DB model
BackendController.prototype.updateEvent = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateEvent(event, function (result, err) {
    daoMsql.updateEvent(req, function (result, err) {
        console.log("Enter to the update event function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
/** Delete Event object from DB model */
BackendController.prototype.deleteEvent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteEvent(req, function (result, err) {
        console.log("connecting to database and deleting event" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("event deleted");

            callback(result);
        }
    });
}










/* CRUD operations for skill */

//Insert skill
BackendController.prototype.insertSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertSkill(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get skill by id object from DB model
BackendController.prototype.getSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getSkill(req.userId, function (result, err) {
        console.log("Enter to the get skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL skills' objects from DB model
BackendController.prototype.getSkills = function (callback) {

    var daoMsql = new DAOMySql();
    daoMsql.getSkills(function (result, err) {
        console.log("Enter to the get skills function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update skill object from DB model
BackendController.prototype.updateSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateSkill(skill, function (result, err) {
    daoMsql.updateSkill(req, function (result, err) {
        console.log("Enter to the update skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
/** Delete Skill object from DB model */
BackendController.prototype.deleteSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteSkill(req, function (result, err) {
        console.log("connecting to database and deleting skill" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("skill deleted");

            callback(result);
        }
    });
}










/* CRUD operations for image */

//Insert image
BackendController.prototype.insertImage = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertImage(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get image by id object from DB model
BackendController.prototype.getImage = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getImage(req.userId, function (result, err) {
        console.log("Enter to the get image function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL images' objects from DB model
BackendController.prototype.getImages = function (callback) {

    var daoMsql = new DAOMySql();
    daoMsql.getImages(function (result, err) {
        console.log("Enter to the get images function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update image object from DB model
BackendController.prototype.updateImage = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateImage(image, function (result, err) {
    daoMsql.updateImage(req, function (result, err) {
        console.log("Enter to the update image function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
/** Delete Image object from DB model */
BackendController.prototype.deleteImage = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteImage(req, function (result, err) {
        console.log("connecting to database and deleting image" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("image deleted");

            callback(result);
        }
    });
}










/* CRUD operations for student_skill */

//Insert student_skill
BackendController.prototype.insertStudent_skill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertStudent_skill(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get student_skill by id object from DB model
BackendController.prototype.getStudent_skill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getStudent_skill(req.userId, function (result, err) {
        console.log("Enter to the get student_skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL student_skills' objects from DB model
BackendController.prototype.getStudent_skills = function (callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getStudent_skills(function (result, err) {
        console.log("Enter to the get student_skills function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update student_skill object from DB model
BackendController.prototype.updateStudent_skill = function (req, callback) {

    var daoMsql = new DAOMySql();

    // daoMsql.updateStudent_skill(student_skill, function (result, err) {
    daoMsql.updateStudent_skill(req, function (result, err) {
        console.log("Enter to the update student_skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}


/** Delete Student_skill object from DB model */
BackendController.prototype.deleteStudent_skill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteStudent_skill(req, function (result, err) {
        console.log("connecting to database and deleting student_skill" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("student_skill deleted");

            callback(result);
        }
    });
}











/* crud controller for getnotifications */

BackendController.prototype.getNotification = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getNotification(function (result, err) {
        console.log("Enter to the get notifications");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("returning from controller");

            callback(result);
        }
    });
}





module.exports = BackendController;
