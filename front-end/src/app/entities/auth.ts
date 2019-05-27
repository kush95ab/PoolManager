export class Auth {
    userName: string;
    userPassword: string;
    userType:string;

    constructor(userName: string, userPassword: string) {
        this.userName = userName;
        this.userPassword = userPassword;
    }
}
