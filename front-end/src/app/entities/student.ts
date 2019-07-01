// Entity class for Student

export class Student {
    userId:number;
    studentFname: string;
    studentLname: string;
    studentFullname:string;
    studentDOB:string;
    studentGender:string;
    studentAddress: string;
    studentCellPhone: number;
    studentFixedPhone: number;
    studentEmail: string;
    studentImgLink: string;
    studentDescription: string;

    studentId: string;
    studentSchool:string;
    studentGrade:string;
    studentParentName:string;
    studentDate_of_addmission:string;//pool admission date
    
    // getters
    
    public getStudentId(): string {
        return this.studentId;
    }
   
    public getStudentSchool(): string {
        return this.studentSchool;
    }
    
    public getParentName(): string {
        return this.studentParentName;
    }
    
    public getStudentGrade(): string {
        return this.studentGrade;
    }
    
    public getStudentDate_of_addmission(): string {
        return this.studentDate_of_addmission;
    }
    
    
    public getUserId(): number {
        return this.userId;
    }

    public getFirstName(): string {
        return this.studentFname;
    }

    public getLastName(): string {
        return this.studentLname;
    }

    public getFullName(): string {
        return this.studentFullname;
    }
    public getAddress(): string {
        return this.studentAddress;
    }

    public getCellPhone(): number {
        return this.studentCellPhone;
    }
    
    public getFixedPhone(): number {
        return this.studentFixedPhone;
    }
    public getEmail(): string {
        return this.studentEmail;
    }

    public getImgLink(): string {
        return this.studentImgLink;
    }

    public getDescription(): string {
        return this.studentDescription;
    }

    public getDob(): string {
        return this.studentDOB;
    }
    
    public getGender(): string {
        return this.studentGender;
    }
    

    // setters
    public setStudentId(id: string) {
        this.studentId = id;
    }

    public setStudentSchool(scl: string) {
        this.studentSchool = scl;
    }
    
    public setParentName(parent: string) {
        this.studentParentName = parent;
    }
    
    public setStudentGrade(grade: string){
        this.studentGrade = grade;
    }
    
    
    public setStudentDate_of_addmission(date: string){
        this.studentDate_of_addmission = date;
    }
    
    public setUserId(id: number) {
        this.userId = id;
    }

    public setFirstName(fname: string) {
        this.studentFname = fname;
    }

    public setLastName(lname: string) {
        this.studentLname = lname;
    }

    public setFullName(lname: string) {
        this.studentFullname = lname;
    }

    public setAddress(address: string) {
        this.studentAddress = address;
    }

    public setCellPhone(phone: number) {
        this.studentCellPhone = phone;
    }

    public setFixedPhone(phone: number) {
        this.studentFixedPhone = phone;
    }

    public setEmail(email: string) {
        this.studentEmail = email;
    }

    public setImgLink(imglink: string) {
        this.studentImgLink = imglink;
    }

    public setDescription(des: string) {
        this.studentDescription = des;
    }
    
    public setDob(dob: string) {
        this.studentDOB = dob;
    }
    
    public setGender(gender: string) {
        this.studentGender = gender;
    }
    
}