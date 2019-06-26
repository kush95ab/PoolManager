/**
 * Definitions for routings in the system.
 * Server will call to here and this will call to controllers.
 **/


/* ---------  REQUIRES  -----------*/

var express = require('express');
var BackendController = require('../controllers/backend-controller');

//for file uploading
var upload = require('../config/multer.config');
var fileWorker = require('../controllers/file.controller');


/* ---------  DEFINE VARIABLES  -----------*/

var router = express.Router();
var backendController = new BackendController();


/* ---------  ROUTERS - POST METHODS   -----------*/

/* Router for User Authentications */
router.route('/auth').post(function (req, res) {

    console.log('Auth Request identified..');

    backendController.auth(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});


/* Routes for User CRUD operations */

/* Route for Select user by user id */
router.route('/user/selectUser').post(function (req, res) {
    backendController.selectUser(req.body, function (result, error) {
        if (error) {    
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Route for get all users */
router.route('/user/getall').post(function (req, res) {
    backendController.getUsers(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});



/* Route for insert user */
router.route('/user/addUser').post(function (req, res) {
    console.log("addUser request identified in backend Router");
    console.log(req.body);
    
    backendController.insertUser(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
    
});

/* Route for update user */
router.route('/user/updateUser').post(function (req, res) {
    backendController.updateUser(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

//Route for delete user
router.route('/user/deleteUser').post(function (req, res) {
    backendController.deleteUser(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});





/* Routes for student CRUD operations */

/* Route for insert student */
router.route('/student/addStudent').post(function (req, res) {
    console.log("Add student request identified by backend router");    
    console.log(req.body);
    backendController.insertStudent(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting students details */
router.route('/student/getall').post(function (req, res) {
    backendController.getStudents(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

/** Router for getting update student */
router.route('/student/updateStudent').post(function (req, res) {
    console.log(req.body);

    backendController.updateStudent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete student */
router.route('/student/deleteStudent').post(function (req, res) {
    console.log(req.body);

    backendController.deleteStudent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});









/* Routes for coach CRUD operations */

/* Route for insert coach */
router.route('/coach/addCoach').post(function (req, res) {
    console.log("Add Coach request identified by backend router");    
    console.log(req.body);
    backendController.insertCoach(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting coachs details */
router.route('/coach/getall').post(function (req, res) {
    backendController.getCoaches(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

/** Router for getting update coach */
router.route('/coach/updateCoach').post(function (req, res) {
    console.log(req.body);

    backendController.updateCoach(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete coach */
router.route('/coach/deleteCoach').post(function (req, res) {
    console.log("delete coach request identified by backend router");    
    console.log(req.body);

    backendController.deleteCoach(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});










/* Routes for poolmanager CRUD operations */

/* Route for insert poolmanager */
router.route('/poolmanager/addPoolmanager').post(function (req, res) {
    console.log("Add Poolmanager request identified by backend router");    
    console.log(req.body);
    backendController.insertPoolmanager(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});


/* Router for getting poolmanagers details */
router.route('/poolmanager/getall').post(function (req, res) {
    backendController.getPoolmanagers(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log("123");
            
            console.log(result);
            res.json(result);
            console.log("sent to the frontend");   
        }
    });
});

/** Router for getting update poolmanager */
router.route('/poolmanager/updatePoolmanager').post(function (req, res) {
    console.log(req.body);

    backendController.updatePoolmanager(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete poolmanager */
router.route('/poolmanager/deletePoolmanager').post(function (req, res) {
    console.log(req.body);

    backendController.deletePoolmanager(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});









/* Routes for skill CRUD operations */

/* Route for insert skill */
router.route('/skill/addSkill').post(function (req, res) {
    console.log(req.body);
    backendController.insertSkill(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting skills details */
router.route('/skill/getall').post(function (req, res) {
    backendController.getSkills(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

/** Router for getting update skill */
router.route('/skill/updateSkill').post(function (req, res) {
    console.log(req.body);

    backendController.updateSkill(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete skill */
router.route('/skill/deleteSkill').post(function (req, res) {
    console.log(req.body);

    backendController.deleteSkill(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});


/* Router for getting user profile details */
router.route('/profile').post(function (req, res) {
    if (req.body.userType == "S") {
        backendController.getStudent(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.userType == "C") {
        backendController.getCoach(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if(req.body.userType == "P") {
        backendController.getPoolmanager(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
});

/* Router for update user profile */
router.route('/profile/update').post(function (req, res) {
    if (req.body.userType=="S") {
        backendController.updateStudent(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.userType == "C") {
        backendController.updateCoach(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.userType == "P") {
        backendController.updatePoolmanager(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
}); 









/* Routes for student_skill CRUD operations */

/* Route for insert student_skill */
router.route('/student_skill/addStudent_skill').post(function (req, res) {
    console.log(req.body);
    backendController.insertStudent_skill(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting student_skills details */
router.route('/student_skill/getall').post(function (req, res) {
    backendController.getStudent_skills(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

/** Router for getting update student_skill */
router.route('/student_skill/updateStudent_skill').post(function (req, res) {
    console.log(req.body);

    backendController.updateStudent_skill(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete student_skill */
router.route('/student_skill/deleteStudent_skill').post(function (req, res) {
    console.log(req.body);

    backendController.deleteStudent_skill(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});








/* Routes for event CRUD operations */

/* Route for insert event */
router.route('/event/addEvent').post(function (req, res) {
    console.log(req.body);
    backendController.insertEvent(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting events details */
router.route('/event/getall').post(function (req, res) {
    backendController.getEvents(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log("Eventslist ",result);
            res.json(result);
        }
    });
});

/** Router for getting an event by id */
router.route('/event/getEvent').post(function (req, res) {
    console.log(req.body);

    backendController.selectEvent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting update event */
router.route('/event/updateEvent').post(function (req, res) {
    console.log(req.body);

    backendController.updateEvent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete event */
router.route('/event/deleteEvent').post(function (req, res) {
    console.log(req.body);

    backendController.deleteEvent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});








/* Routes for image CRUD operations */

/* Route for insert image */
router.route('/image/addImage').post(function (req, res) {
    console.log(req.body);
    backendController.insertImage(req.body, function (result, error) {

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting images details */
router.route('/image/getall').post(function (req, res) {
    backendController.getImages(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});


/** Router for getting update image */
router.route('/image/updateImage').post(function (req, res) {
    console.log(req.body);

    backendController.updateImage(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/** Router for getting delete image */
router.route('/image/deleteImage').post(function (req, res) {
    console.log(req.body);

    backendController.deleteImage(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});




/* Router for file uploading */
router.route('/file/upload').post(upload.single("file"), fileWorker.uploadFile);




/* routes for notification CRUD operations */

/* get nortification */
router.route('/notify/getnotification').post(function (req, res) {
    // console.log("asdf");

    backendController.getNotification(req.body, function (result, error) {
        console.log("backend router" + result);

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            console.log(result);
            res.json(result);
        }

    });
});
module.exports = router;