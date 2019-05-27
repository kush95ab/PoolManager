import { User } from '../entities/user';
import { Student } from '../entities/student';
import { Coach } from '../entities/coach';
import { Poolmanager } from '../entities/poolmanager';
export class Utils {

    constructor() { }

    public static convertDatabaseUserToUser(dataUser: any): User {

        const user = new User();

        user.userId = dataUser.userId;
        user.userName = dataUser.userName;
        user.userPassword = dataUser.userPassword;
        user.userType = dataUser.userType;

        return user;
    }

    public static convertDatabaseStudentToStudent(dataStudent: any): Student {

        const student = new Student();

        
        student.studentId = dataStudent.studentId;
        student.studentSchool = dataStudent.studentSchool;
        student.studentGrade = dataStudent.studentGrade;
        student.studentParentName = dataStudent.studentParentName;

        student.userId = dataStudent.userId;
        student.studentFname = dataStudent.studentFname;
        student.studentLname = dataStudent.studentLname;
        student.studentFullname = dataStudent.studentFullname;
        student.studentGender = dataStudent.studentGender;
        student.studentDOB = dataStudent.studentDOB;
        student.studentAddress = dataStudent.studentAddress;
        student.studentCellPhone = dataStudent.studentCellphone;
        student.studentFixedPhone = dataStudent.studentFixedphone;
        student.studentEmail = dataStudent.studentEmail;
        student.studentImgLink = dataStudent.studentImgLink;
        student.studentDescription = dataStudent.studentDescription;
        student.studentDate_of_addmission = dataStudent.studentDate_of_addmission;

        return student;

    }

    public static convertDatabaseCoachToCoach(dataCoach: any): Coach {

        const coach = new Coach();

        
        coach.coachNIC = dataCoach.coachNIC;
        coach.coachOccupation = dataCoach.coachOccupation;
        coach.coachExperience = dataCoach.coachExperience;

        coach.userId = dataCoach.userId;
        coach.coachFname = dataCoach.coachFname;
        coach.coachLname = dataCoach.coachLname;
        coach.coachFullname = dataCoach.coachFullname;
        coach.coachGender = dataCoach.coachGender;
        coach.coachDOB = dataCoach.coachDOB;
        coach.coachAddress = dataCoach.coachAddress;
        coach.coachCellPhone = dataCoach.coachCellphone;
        coach.coachFixedPhone = dataCoach.coachFixedphone;
        coach.coachEmail = dataCoach.coachEmail;
        coach.coachImgLink = dataCoach.coachImgLink;
        coach.coachDescription = dataCoach.coachDescription;

        return coach;

    }
    public static convertDatabasePoolmanagerToPoolmanager(dataPoolmanager: any): Poolmanager {

        const poolmanager = new Poolmanager();

        
        poolmanager.poolmanagerNIC = dataPoolmanager.poolmanagerNIC;
        poolmanager.poolmanagerExperience = dataPoolmanager.poolmanagerExperience;

        poolmanager.userId = dataPoolmanager.userId;
        poolmanager.poolmanagerFname = dataPoolmanager.poolmanagerFname;
        poolmanager.poolmanagerLname = dataPoolmanager.poolmanagerLname;
        poolmanager.poolmanagerFullname = dataPoolmanager.poolmanagerFullname;
        poolmanager.poolmanagerGender = dataPoolmanager.poolmanagerGender;
        poolmanager.poolmanagerDOB = dataPoolmanager.poolmanagerDOB;
        poolmanager.poolmanagerAddress = dataPoolmanager.poolmanagerAddress;
        poolmanager.poolmanagerCellPhone = dataPoolmanager.poolmanagerCellphone;
        poolmanager.poolmanagerFixedPhone = dataPoolmanager.poolmanagerFixedphone;
        poolmanager.poolmanagerEmail = dataPoolmanager.poolmanagerEmail;
        poolmanager.poolmanagerImgLink = dataPoolmanager.poolmanagerImgLink;
        poolmanager.poolmanagerDescription = dataPoolmanager.poolmanagerDescription;

        return poolmanager;

    }


    }
