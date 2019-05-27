/* Student Entity */
var Student = function (userId, studentId, studentSchool, studentGrade, studentParentName, studentDate_of_addmission, studentFname, studentLname, studentFullname, studentGender, studentDOB, studentAddress, studentCellPhone, studentFixedPhone, studentEmail, studentImgLink, studentCoach, studentDescription) {

    this.userId = userId;
    this.studentId = studentId;
    this.studentSchool = studentSchool;
    this.studentGrade = studentGrade;
    this.studentParentName = studentParentName;
    this.studentCoach = studentCoach;
    this.studentDate_of_addmission = studentDate_of_addmission;

    this.studentFname = studentFname;
    this.studentLname = studentLname;
    this.studentFullname = studentFullname;
    this.studentGender = studentGender;
    this.studentDOB = studentDOB;
    this.studentAddress = studentAddress;
    this.studentCellPhone = studentCellphone;
    this.studentFixedPhone = studentFixedphone;
    this.studentEmail = studentEmail;
    this.studentImgLink = studentImgLink;
    this.studentDescription = studentDescription;

}

module.exports = Student;
