// Entity class for coach

export class Coach {
    userId:number;
    coachFname: string;
    coachFullname:string;
    coachLname: string;
    coachAddress: string;
    coachCellPhone: number;
    coachFixedPhone: number;
    coachEmail: string;
    coachImgLink: string;
    coachDescription: string;
    coachDOB:string;
    coachGender:string;

    coachNIC: string;
    coachOccupation:string;
    coachExperience:string;
    
    // getters
    
    public getNIC(): string {
        return this.coachNIC;
    }
   
    public getOccupation(): string {
        return this.coachOccupation;
    }
    
    public getExperience(): string {
        return this.coachExperience;
    }
    
   
    
    public getUserId(): number {
        return this.userId;
    }

    public getFirstName(): string {
        return this.coachFname;
    }

    public getLastName(): string {
        return this.coachLname;
    }

    public getFullName(): string {
        return this.coachFullname;
    }
    public getAddress(): string {
        return this.coachAddress;
    }

    public getCellPhone(): number {
        return this.coachCellPhone;
    }
    
    public getFixedPhone(): number {
        return this.coachFixedPhone;
    }
    public getEmail(): string {
        return this.coachEmail;
    }

    public getImgLink(): string {
        return this.coachImgLink;
    }

    public getDescription(): string {
        return this.coachDescription;
    }

    public getDob(): string {
        return this.coachDOB;
    }
    
    public getGender(): string {
        return this.coachGender;
    }
    

    // setters
    public setNIC(id: string) {
        this.coachNIC = id;
    }

    public setOccupation(occ: string) {
        this.coachOccupation = occ;
    }
    
    public setExperience(exp: string) {
        this.coachExperience = exp;
    }
   
  
    public setUserId(id: number) {
        this.userId = id;
    }

    public setFirstName(fname: string) {
        this.coachFname = fname;
    }

    public setLastName(lname: string) {
        this.coachLname = lname;
    }

    public setFullName(lname: string) {
        this.coachFullname = lname;
    }

    public setAddress(address: string) {
        this.coachAddress = address;
    }

    public setCellPhone(phone: number) {
        this.coachCellPhone = phone;
    }

    public setFixedPhone(phone: number) {
        this.coachFixedPhone = phone;
    }

    public setEmail(email: string) {
        this.coachEmail = email;
    }

    public setImgLink(imglink: string) {
        this.coachImgLink = imglink;
    }

    public setDescription(des: string) {
        this.coachDescription = des;
    }
    
    public setDob(dob: string) {
        this.coachDOB = dob;
    }
    
    public setGender(gender: string) {
        this.coachGender = gender;
    }
    
}