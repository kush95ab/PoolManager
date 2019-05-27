/* Poolmanager Entity */
var Poolmanager = function (userId, poolmanagerNIC, poolmanagerExperience, poolmanagerStartDate, poolmanagerEndDate, poolmanagerFname, poolmanagerLname, poolmanagerFullname, poolmanagerGender, poolmanagerDOB, poolmanagerAddress, poolmanagerCellPhone, poolmanagerFixedPhone, poolmanagerEmail, poolmanagerImgLink, poolmanagerDescription) {

    this.userId = userId;
    this.poolmanagerNIC = poolmanagerNIC;
    this.poolmanagerExperience = poolmanagerExperience;
    this.poolmanagerStartDate = poolmanagerStartDate;
    this.poolmanagerEndDate = poolmanagerEndDate;
    
    this.poolmanagerFname = poolmanagerFname;
    this.poolmanagerLname = poolmanagerLname;
    this.poolmanagerFullname = poolmanagerFullname;
    this.poolmanagerGender = poolmanagerGender;
    this.poolmanagerDOB = poolmanagerDOB;
    this.poolmanagerAddress = poolmanagerAddress;
    this.poolmanagerCellPhone = poolmanagerCellphone;
    this.poolmanagerFixedPhone = poolmanagerFixedphone;
    this.poolmanagerEmail = poolmanagerEmail;
    this.poolmanagerImgLink = poolmanagerImgLink;
    this.poolmanagerDescription = poolmanagerDescription;

}

module.exports = Poolmanager;