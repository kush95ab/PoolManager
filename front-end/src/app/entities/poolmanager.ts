// Entity class for poolmanager

export class Poolmanager {
    userId:string;
    poolmanagerFname: string;
    poolmanagerFullname:string;
    poolmanagerLname: string;
    poolmanagerAddress: string;
    poolmanagerCellPhone: string;
    poolmanagerFixedPhone: string;
    poolmanagerEmail: string;
    poolmanagerImgLink: string;
    poolmanagerDescription: string;
    poolmanagerDOB:string;
    poolmanagerGender:string;

    poolmanagerNIC: string;
    poolmanagerExperience:string;
    
    // getters
    
    public getNIC(): string {
        return this.poolmanagerNIC;
    }
    
    public getExperience(): string {
        return this.poolmanagerExperience;
    }
    
   
    
    public getUserId(): string {
        return this.userId;
    }

    public getFirstName(): string {
        return this.poolmanagerFname;
    }

    public getLastName(): string {
        return this.poolmanagerLname;
    }

    public getFullName(): string {
        return this.poolmanagerFullname;
    }
    public getAddress(): string {
        return this.poolmanagerAddress;
    }

    public getCellPhone(): string {
        return this.poolmanagerCellPhone;
    }
    
    public getFixedPhone(): string {
        return this.poolmanagerFixedPhone;
    }
    public getEmail(): string {
        return this.poolmanagerEmail;
    }

    public getImgLink(): string {
        return this.poolmanagerImgLink;
    }

    public getDescription(): string {
        return this.poolmanagerDescription;
    }

    public getDob(): string {
        return this.poolmanagerDOB;
    }
    
    public getGender(): string {
        return this.poolmanagerGender;
    }
    

    // setters
    public setNIC(id: string) {
        this.poolmanagerNIC = id;
    }

    public setExperience(exp: string) {
        this.poolmanagerExperience = exp;
    }
   
  
    public setUserId(id: string) {
        this.userId = id;
    }

    public setFirstName(fname: string) {
        this.poolmanagerFname = fname;
    }

    public setLastName(lname: string) {
        this.poolmanagerLname = lname;
    }

    public setFullName(lname: string) {
        this.poolmanagerFullname = lname;
    }

    public setAddress(address: string) {
        this.poolmanagerAddress = address;
    }

    public setCellPhone(phone: string) {
        this.poolmanagerCellPhone = phone;
    }

    public setFixedPhone(phone: string) {
        this.poolmanagerFixedPhone = phone;
    }

    public setEmail(email: string) {
        this.poolmanagerEmail = email;
    }

    public setImgLink(imglink: string) {
        this.poolmanagerImgLink = imglink;
    }

    public setDescription(des: string) {
        this.poolmanagerDescription = des;
    }
    
    public setDob(dob: string) {
        this.poolmanagerDOB = dob;
    }
    
    public setGender(gender: string) {
        this.poolmanagerGender = gender;
    }
    
}