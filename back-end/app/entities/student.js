/* Student Entity */
var Student = function (userId, studentFname, studentLname, studentFullname, studentGender, studentDOB, studentAddress, studentCellphone, studentFixedphone, studentEmail, studentImgLink, studentCoach, studentDescription,studentId, studentSchool, studentGrade, studentParentName, studentDate_of_addmission,) {

    this.userId = userId;
    this.studentFname = studentFname;
    this.studentLname = studentLname;
    this.studentFullname = studentFullname;
    this.studentDOB = studentDOB;//
    this.studentGender = studentGender;//
    this.studentAddress = studentAddress;
    this.studentEmail = studentEmail; 
    this.studentCellPhone = studentCellphone;
    this.studentFixedPhone = studentFixedphone;
    this.studentImgLink = studentImgLink;
    this.studentDescription = studentDescription;

    this.studentId = studentId;//
    this.studentSchool = studentSchool;
    this.studentGrade = studentGrade;//
    this.studentParentName = studentParentName;
    this.studentCoach = studentCoach;//who enter the skills
    this.studentDate_of_addmission = studentDate_of_addmission;//first day of pool

    
}

module.exports = Student;
