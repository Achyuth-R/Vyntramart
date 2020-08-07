export class User{
    // id : number;
    UserName : string;
    firstName : string;
    lastName : string;
    email : string;
    address : string;
    Password : string;

    constructor(  UserName : string, Password : string, firstName : string, lastName : string, email : string, address: string){
        // this.id = id;
        this.UserName = UserName;
        this.Password = Password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
    }
}
