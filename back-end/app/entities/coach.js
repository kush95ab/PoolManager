/* Coach Entity */
var Coach = function (userId,coachNIC, coachOccupation, coachExperience, coachFname, coachLname, coachFullname, coachGender, coachDOB, coachAddress, coachCellphone, coachFixedphone, coachEmail, coachImgLink, coachDescription) {

    this.userId = userId;
    this.coachNIC = coachNIC;
    this.coachOccupation = coachOccupation;
    this.coachExperience = coachExperience;

    this.coachFname = coachFname;
    this.coachLname = coachLname;
    this.coachFullname = coachFullname;
    this.coachGender = coachGender;
    this.coachDOB = coachDOB;
    this.coachAddress = coachAddress;
    this.coachCellphone = coachCellphone;
    this.coachFixedphone = coachFixedphone;
    this.coachEmail = coachEmail;
    this.coachImgLink = coachImgLink;
    this.coachDescription = coachDescription;

    
}

module.exports = Coach;