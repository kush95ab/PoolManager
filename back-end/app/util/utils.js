/**
 * Definitions for DB queries and related functions.
 * Backend-Mysql-Database will call to here and this will call to entities.
 **/


/* ---------  REQUIRES   -----------*/

var Coach = require ( '../entities/coach');
var Poolmanager = require ( '../entities/poolManager');
var Event = require ( '../entities/event');
var Image = require ( '../entities/image');
var Skill = require ( '../entities/skill');
var Student = require ( '../entities/student');
var Student_skill = require ( '../entities/studentSkill');
var User = require ( '../entities/user');


/* ------ UTILS FUNCTIONS ------- */

function Utils() { }



// User Entity related functions ..............................................................
// SQL query for select all users
Utils.prototype.getSqlSelectAllUsers = function () {

    var sqlSelectUser = "SELECT * FROM  user";
    return sqlSelectUser;
};

// SQL query for select user by user name
Utils.prototype.getSqlAuth = function (userName) {

    var sqlSelectUser = "SELECT * FROM  user WHERE user_name like '" + userName + "'";
    return sqlSelectUser;
};

// SQL query for select user by user Id
Utils.prototype.getSqlSelectUser = function (userId) {

    var sqlSelectUser = "SELECT * FROM  user WHERE user_Id = " + userId;
    return sqlSelectUser;
};

// SQL query for insert user
Utils.prototype.getSqlInsertUser = function (user) {

    var sqlUser = "INSERT INTO user (user_type, user_name, password ) VALUES (" +
        "'" + user.userType + "', " +
        "'" + user.userName + "', " +
        "'" + user.userPassword + "')";
    return sqlUser;
};

// SQL query for update user by id
Utils.prototype.getUpdateSqlUser = function (user) {

    var sqlUser = "UPDATE user SET" +
        " user_type='" + user.userType + "'," +
        " user_name='" + user.userName + "'," +
        " password='" + user.userPassword + "' WHERE" +
        " user_Id=" + user.userId;
    return sqlUser;
};

// SQL query for delete user by id
Utils.prototype.getDeleteSqlUser = function (user) {

    var sqlDeleteUser = "DELETE FROM user WHERE user_Id=" + user.userId;
    return sqlDeleteUser;
};



// Student Entity related functions................................................................
// SQL query for select all students
Utils.prototype.getSqlSelectAllStudents = function () {

    var sqlSelectStudent = "SELECT * FROM student";
    return sqlSelectStudent;
};

// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function (studentId) {

    var sqlSelectStudent = "SELECT * FROM student WHERE student_Id=" + studentId;
    return sqlSelectStudent;
};

// SQL query for select student by student first name
Utils.prototype.getSqlSelectStudentByFname = function (studentFname) {

    var sqlSelectStudent = "SELECT * FROM  student WHERE first_name like '" + studentFname + "'";
    return sqlSelectStudent;
};

// SQL query for insert student
Utils.prototype.getInsertSqlStudent = function (student) {

    var sqlInsertStudent = "INSERT INTO student (user_Id,student_Id, school, grade, parent, coach, dateOfAdmission, first_name, last_name, full_name, dob, gender, address, cell_phone, fixed_phone, email, imglink, status" +
        " ) VALUES (" +
        student.userId + ", " +
        student.studentId + ", " +
        "'" + student.studentSchool + "', " +
        student.studentGrade + ", " +
        "'" + student.studentParentName + "', " +
        "'" + student.studentCoach + "', " +
        "'" + student.studentDate_of_addmission + "', " +
        "'" + student.studentFname + "', " +
        "'" + student.studentLname + "', " +
        "'" + student.studentFullname + "', " +
        "'" + student.studentDOB + "', " +
        "'" + student.studentGender + "', " +
        "'" + student.studentAddress + "', " +
        student.studentCellPhone + ", " +
        student.studentFixedPhone + ", " +
        "'" + student.studentEmail + "', " +
        "'" + student.studentImgLink + "', " +
        "'" + student.studentDescription + "')";
    return sqlInsertStudent;
};

// SQL query for update student by student id
Utils.prototype.getUpdateSqlStudent = function (student) {

    var sqlUpdateStudent = "UPDATE student SET" +
        " user_Id=" + student.userId + "," +
        " student_Id=" + student.studentId + "," +
        " grade=" + student.studentGrade + "," +
        " parent='" + student.studentParentName + "'," +
        " coach='" + student.studentCoach + "'," +
        " dateOfAdmission='" + student.studentDate_of_addmission+ "'," +
        " first_name='" + student.studentFname + "'," +
        " last_name='" + student.studentLname + "'," +
        " full_name='" + student.studentFullname + "'," +
        " dob='" + student.studentDOB + "'," +
        " gender='" + student.studentGender + "'," +
        " address='" + student.studentAddress + "'," +
        " cell_phone=" + student.studentCellphone + "," +
        " fixed_phone=" + student.studentFixedPhone + "," +
        " email='" + student.studentEmail + "'," +
        " imglink='" + student.studentImgLink + "'," +
        " school='" + student.studentSchool + "'," +
        " status='" + student.studentDescription + "' WHERE" +
        " student_Id=" + student.studentId;
    return sqlUpdateStudent;
};


// SQL query for delete student by id
Utils.prototype.getDeleteSqlStudent = function (student) {

    var sqlDeleteStudent = "DELETE FROM student WHERE student_Id=" + student.studentId;
    return sqlDeleteStudent;
};



// Coach Entity related functions................................................................
// SQL query for select all coaches
Utils.prototype.getSqlSelectAllCoaches = function () {

    var sqlSelectCoach = "SELECT * FROM coach";
    return sqlSelectCoach;
};

// SQL query for select coach by coach id
Utils.prototype.getSqlSelectCoach = function (userId) {

    var sqlSelectCoach = "SELECT * FROM coach WHERE user_Id=" + userId;
    return sqlSelectCoach;
};

// SQL query for select coach by coach first name
Utils.prototype.getSqlSelectCoachByFname = function (coachFname) {

    var sqlSelectCoach = "SELECT * FROM  coach WHERE first_name like '" + coachFname + "'";
    return sqlSelectCoach;
};

// SQL query for insert coach
Utils.prototype.getInsertSqlCoach = function (coach) {

    var sqlInsertCoach = "INSERT INTO coach (user_Id,NIC, experience, occupation,first_name, last_name, full_name, dob, gender, address, cell_phone, fixed_phone, email, imglink, status" +
        " ) VALUES (" +
        coach.userId + ", " +
        coach.coachNIC + ", " +
        "'" + coach.coachExperience + "', " +
        "'" + coach.coachOccupation + "', " +
        "'" + coach.coachFname + "', " +
        "'" + coach.coachLname + "', " +
        "'" + coach.coachFullname + "', " +
        "'" + coach.coachDOB + "', " +
        "'" + coach.coachGender + "', " +
        "'" + coach.coachAddress + "', " +
        coach.coachCellPhone + ", " +
        coach.coachFixedPhone + ", " +
        "'" + coach.coachEmail + "', " +
        "'" + coach.coachImgLink + "', " +
        "'" + coach.coachDescription + "')";

    return sqlInsertCoach;
};

// SQL query for update coach by userId
Utils.prototype.getUpdateSqlCoach = function (coach) {

    var sqlUpdateCoach = "UPDATE coach SET" +
        " user_Id=" + coach.userId + "," +
        " NIC=" + coach.coachId + "," +
        " experience=" + coach.coachExperience + "," +
        " occupation=" + coach.coachOccupation + "," +
        " first_name='" + coach.coachFname + "'," +
        " last_name='" + coach.coachLname + "'," +
        " full_name='" + coach.coachFullname + "'," +
        " dob='" + coach.coachDOB + "'," +
        " gender='" + coach.coachGender + "'," +
        " address='" + coach.coachAddress + "'," +
        " cell_phone=" + coach.coachCellphone + "," +
        " fixed_phone=" + coach.coachFixedPhone + "," +
        " email='" + coach.coachEmail + "'," +
        " imglink='" + coach.coachImgLink + "'," +
        " status='" + coach.coachDescription + "' WHERE" +
        " user_Id=" + coach.userId;
    return sqlUpdateCoach;
};


// SQL query for delete coach by userid
Utils.prototype.getDeleteSqlCoach = function (coach) {

    var sqlDeleteCoach = "DELETE FROM coach WHERE user_Id=" + coach.userId;
    return sqlDeleteCoach;
};



// Poolmanager Entity related functions................................................................
// SQL query for select all poolmanagers
Utils.prototype.getSqlSelectAllPoolmanagers = function () {

    var sqlSelectPoolmanager = "SELECT * FROM poolmanager";
    return sqlSelectPoolmanager;
};

// SQL query for select poolmanager by poolmanager userIid
Utils.prototype.getSqlSelectPoolmanager = function (userId) {

    var sqlSelectPoolmanager = "SELECT * FROM poolmanager WHERE user_Id=" + userId;
    return sqlSelectPoolmanager;
};

// SQL query for select poolmanager by poolmanager first name
Utils.prototype.getSqlSelectPoolmanagerByFname = function (poolmanagerFname) {

    var sqlSelectPoolmanager = "SELECT * FROM  poolmanager WHERE first_name like '" + poolmanagerFname + "'";
    return sqlSelectPoolmanager;
};

// SQL query for insert poolmanager
Utils.prototype.getInsertSqlPoolmanager = function (poolmanager) {

    var sqlInsertPoolmanager = "INSERT INTO poolmanager (user_Id, NIC, experience, start_date, end_date, first_name, last_name, full_name, dob, gender, address, cell_phone, fixed_phone, email, imglink, status" +
        "  ) VALUES (" +
        poolmanager.userId + ", " +
        poolmanager.poolmanagerNIC + ", " +
        "'" + poolmanager.poolmanagerExperience + "', " +
        "'" + poolmanager.poolmanagerStartDate + "', " +
        "'" + poolmanager.poolmanagerEndDate + "', " +
        "'" + poolmanager.poolmanagerFname + "', " +
        "'" + poolmanager.poolmanagerLname + "', " +
        "'" + poolmanager.poolmanagerFullname + "', " +
        "'" + poolmanager.poolmanagerDOB + "', " +
        "'" + poolmanager.poolmanagerGender + "', " +
        "'" + poolmanager.poolmanagerAddress + "', " +
        poolmanager.poolmanagerCellPhone + ", " +
        poolmanager.poolmanagerFixedPhone + ", " +
        "'" + poolmanager.poolmanagerEmail + "', " +
        "'" + poolmanager.poolmanagerImgLink + "', " +
        "'" + poolmanager.poolmanagerDescription + "')";

    return sqlInsertPoolmanager;
};

// SQL query for update poolmanager by poolmanager id
Utils.prototype.getUpdateSqlPoolmanager = function (poolmanager) {

    var sqlUpdatePoolmanager = "UPDATE poolmanager SET" +
        " user_Id=" + poolmanager.userId + "," +
        " NIC=" + poolmanager.poolmanagerId + "," +
        " experience=" + poolmanager.poolmanagerExperience + "," +
        " first_name='" + poolmanager.poolmanagerFname + "'," +
        " last_name='" + poolmanager.poolmanagerLname + "'," +
        " full_name='" + poolmanager.poolmanagerFullname + "'," +
        " dob='" + poolmanager.poolmanagerDOB + "'," +
        " gender='" + poolmanager.poolmanagerGender + "'," +
        " address='" + poolmanager.poolmanagerAddress + "'," +
        " cell_phone=" + poolmanager.poolmanagerCellphone + "," +
        " fixed_phone=" + poolmanager.poolmanagerFixedPhone + "," +
        " email='" + poolmanager.poolmanagerEmail + "'," +
        " imglink='" + poolmanager.poolmanagerImgLink + "'," +
        " status='" + poolmanager.poolmanagerDescription + "' WHERE" +
        " user_Id=" + poolmanager.userId;
    return sqlUpdatePoolmanager;
};


// SQL query for delete poolmanager by id
Utils.prototype.getDeleteSqlPoolmanager = function (poolmanager) {

    var sqlDeletePoolmanager = "DELETE FROM poolmanager WHERE user_Id=" + poolmanager.userId;
    return sqlDeletePoolmanager;
};




// Skill Entity related functions................................................................
// SQL query for select skill by id
Utils.prototype.getSqlSelectAllSkills = function () {

    var sqlSelectSkill = "SELECT * FROM skill ";
    return sqlSelectSkill;
};
// SQL query for select skill by id
Utils.prototype.getSqlSelectSkill = function (skillId) {

    var sqlSelectSkill = "SELECT * FROM skill WHERE skill_id=" + skillId;
    return sqlSelectSkill;
};

// SQL query for insert skill
Utils.prototype.getInsertSqlSkill = function (skill) {

    var sqlSkill = "INSERT INTO skill (skill_name, description) VALUES (" +
        "'" + skill.skillName + "', " +
        "'" + skill.skillDescription + "')";
    return sqlSkill;
};

// SQL query for update skill by id
Utils.prototype.getUpdateSqlSkill = function (skill) {

    var sqlSkill = "UPDATE skill SET" +
        " skill_name='" + skill.skillName + "'," +
        " description='" + skill.skillDescription + "' WHERE" +
        " skill_Id=" + skill.skillId;
    return sqlSkill;
};

// SQL query for delete skill by id
Utils.prototype.getDeleteSqlSkill = function (skill) {

    var sqlDeleteSkill = "DELETE FROM skill WHERE skill_Id=" + skill.skillId;
    return sqlDeleteSkill;
};




// Student_skill Entity related functions................................................................
// SQL query for select student_skill by Student_Id
Utils.prototype.getSqlSelectAllStudent_skills = function () {

    var sqlSelectStudent_skill = "SELECT * FROM student_skill";
    return sqlSelectStudent_skill;
};


// SQL query for select student_skill by Student_Id
Utils.prototype.getSqlSelectStudent_skill = function (Student_Id) {

    var sqlSelectStudent_skill = "SELECT * FROM student_skill WHERE student=" + Student_Id;
    return sqlSelectStudent_skill;
};

// SQL query for insert student_skill
Utils.prototype.getInsertSqlStudent_skill = function (student_skill) {

    var sqlStudent_skill = "INSERT INTO student_skill (student, skill, level, status, coach) VALUES (" +
        student_skill.student_skillStudent + ", " +
        student_skill.student_skillSkill + "', " +
        student_skill.student_skillLevel + "', " +
        "'" + student_skill.student_skillStatus + "', " +
        student_skill.student_skillCoach + ")";
    return sqlStudent_skill;
};

// SQL query for update student_skill by id
Utils.prototype.getUpdateSqlStudent_skill = function (student_skill) {

    var sqlStudent_skill = "UPDATE student_skill SET" +
        " level='" + student_skill.student_skillLevel + "'," +
        " status='" + student_skill.student_skillStatus + "'," +
        " coach='" + student_skill.student_skillCoach + "' WHERE" +
        " student=" + student_skill.student_skillStudent + " AND" +
        " skill=" + student_skill.student_skill;
    return sqlStudent_skill;
};

// SQL query for delete student_skill by id
Utils.prototype.getDeleteSqlStudent_skill = function (student_skill) {

    var sqlDeleteStudent_skill = "DELETE FROM student_skill WHERE student= " + student_skill.student_skillStudent + " AND" +
        " skill=" + student_skill.student_skill;
    return sqlDeleteStudent_skill;
};





// Event Entity related functions................................................................
// SQL query for select all events
Utils.prototype.getSqlSelectAllEvents = function () {

    var sqlSelectEvent = "SELECT * FROM event ";
    return sqlSelectEvent;
};


// SQL query for select event by date
Utils.prototype.getSqlSelectEvent = function (eventDate) {

    var sqlSelectEvent = "SELECT * FROM event WHERE event_date=" + "'" + eventDate + "'";
    return sqlSelectEvent;
};


// SQL query for insert event
Utils.prototype.getInsertSqlEvent = function (event) {

    var sqlEvent = "INSERT INTO event (event_name, event_date, start_time, end_time, coordinator, contact, description) VALUES (" +
        "'" + event.eventname + "', " +
        "'" + event.eventDate + "', " +
        "'" + event.eventStart_time + "', " +
        "'" + event.eventEnd_time + "', " +
        "'" + event.eventCoordinator + "', " +
              event.eventContact + ", " +
        "'" + event.eventDescription + "')";
    return sqlEvent;
};


// SQL query for update event by id
Utils.prototype.getUpdateSqlEvent = function (event) {

    var sqlEvent = "UPDATE event SET" +
        " event_name='" + event.eventname + "'," +
        " event_date='" + event.eventDate + "'," +
        " start_time='" + event.eventStart_time + "'," +
        " end_time='" + event.eventEnd_time + "'," +
        " coordinator='" + event.eventCoordinator + "'," +
        " contact=" + event.eventContact + "," +
        " description='" + event.eventDescription + "' WHERE" +
        " event_Id=" + event.eventId;
    return sqlEvent;
};

// SQL query for delete event by id
Utils.prototype.getDeleteSqlEvent = function (event) {

    var sqlDeleteEvent = "DELETE FROM event WHERE event_Id=" + event.eventId;
    return sqlDeleteEvent;
};




// Image Entity related functions................................................................
// SQL query for select all images
Utils.prototype.getSqlSelectAllImages = function () {

    var sqlSelectImage = "SELECT * FROM image";
    return sqlSelectImage;
};

// SQL query for select image by Event_Id
Utils.prototype.getSqlSelectImage = function (event_Id) {

    var sqlSelectImage = "SELECT * FROM image WHERE event_Id=" + event_Id;
    return sqlSelectImage;
};

// SQL query for insert image
Utils.prototype.getInsertSqlImage = function (image) {

    var sqlImage = "INSERT INTO image (event_Id, photo) VALUES (" +
        image.eventId + ", " +
        image.imageLink + ")";
    return sqlImage;
};

// // SQL query for update image by id
// Utils.prototype.getUpdateSqlImage = function (image) {

//     var sqlImage = "UPDATE image SET" +
//         " image_name='" + image.imageName + "'," +
//         " description='" + image.imageDescription + "' WHERE" +
//         " image_Id=" + image.imageId;
//     return sqlImage;
// };

// SQL query for delete image by id
Utils.prototype.getDeleteSqlImage = function (Image) {

    var sqlDeleteImage = "DELETE FROM image WHERE image_Id=" + Image.imageId;
    return sqlDeleteImage;
};

























/* ------ Objects generating function definitions ------- */
// user object generating function
Utils.prototype.generateUser = function (resultUser) {
    // console.log( resultUser);
    // console.log("in utils");
    
    var user = null;
    if (resultUser) {
        user = new User(
            resultUser.user_Id,
            resultUser.user_name,
            resultUser.password,
            resultUser.user_type);
    }
    return user;
};


// student object generating function
Utils.prototype.generateStudent = function (resultStudent) {
    var student = null;
    if (resultStudent) {
        student = new Student(

            resultStudent.user_Id,
            resultStudent.student_Id,
            resultStudent.school,
            resultStudent.grade,
            resultStudent.parent,
            resultStudent.coach,
            resultStudent.dateOfAdmission,

            resultStudent.first_name,
            resultStudent.last_name,
            resultStudent.full_name,
            resultStudent.gender,
            resultStudent.dob,
            resultStudent.address,
            resultStudent.cell_phone,
            resultStudent.fixed_phone,
            resultStudent.email,
            resultStudent.imglink,
            resultStudent.status);
    }
    return student;
}

// Coach object generating function
Utils.prototype.generateCoach = function (resultCoach) {
    console.log("in utils 1");
    console.log(resultCoach);
    
    var coach = null;
    if (resultCoach) {
        coach = new Coach(
            resultCoach.user_Id,
            resultCoach.NIC,
            resultCoach.occupation,
            resultCoach.experience,

            resultCoach.first_name,
            resultCoach.last_name,
            resultCoach.full_name,
            resultCoach.gender,
            resultCoach.dob,
            resultCoach.address,
            resultCoach.cell_phone,
            resultCoach.fixed_phone,
            resultCoach.email,
            resultCoach.imglink,
            resultCoach.status);
    }
    console.log('in utils 2');
    
    
    return coach;
}

// Poolmanager object generating function
Utils.prototype.generatePoolmanager = function (resultPoolmanager) {
    var poolmanager = null;
    if (resultPoolmanager) {
        poolmanager = new Poolmanager(
            resultPoolmanager.user_Id,
            resultPoolmanager.NIC,
            resultPoolmanager.experience,
            resultPoolmanager.start_date,
            resultPoolmanager.end_date,

            resultPoolmanager.first_name,
            resultPoolmanager.last_name,
            resultPoolmanager.full_name,
            resultPoolmanager.gender,
            resultPoolmanager.dob,
            resultPoolmanager.address,
            resultPoolmanager.cell_phone,
            resultPoolmanager.fixed_phone,
            resultPoolmanager.email,
            resultPoolmanager.imglink,
            resultPoolmanager.status);
    }
    return poolmanager;
}




// skill object generating function
Utils.prototype.generateSkill = function (resultSkill) {
    var skill = null;
    if (resultSkill) {
        skill = new Skill(
            resultSkill.skill_Id,
            resultSkill.skill_name,
            resultSkill.description);
    }
    return skill;
};



// student-skill object generating function
Utils.prototype.generateStudent_skill = function (resultStudent_skill) {
    var student_skill = null;
    if (resultStudent_skill) {
        student_skill = new Student_skill(
            resultStudent_skill.student,
            resultStudent_skill.skill,
            resultStudent_skill.level,
            resultStudent_skill.status,
            resultStudent_skill.coach);
    }
    return student_skill;
};

// Event object generating function
Utils.prototype.generateEvent = function (resultEvent) {
    var event = null;
    if (resultEvent) {
        event = new Event(

            resultEvent.event_Id,
            resultEvent.event_name,
            resultEvent.event_date,
            resultEvent.start_time,
            resultEvent.end_time,
            resultEvent.coordinator,
            resultEvent.contact,
            resultEvent.description);
    }
    return event;
};


// image object generating function
Utils.prototype.generateImage = function (resultImage) {
    var image = null;
    if (resultImage) {
        image = new Image(
            resultImage.image_Id,
            resultImage.event_Id,
            resultImage.photo,
            resultImage.date);
    }
    return image;
};


// get latest nortifications

Utils.prototype.getSqlSelectNotifications = function () {
    var selectSqlnotify = "SELECT * FROM notifications";
    console.log(selectSqlnotify);

    return selectSqlnotify;
}

// export utils
module.exports = Utils;