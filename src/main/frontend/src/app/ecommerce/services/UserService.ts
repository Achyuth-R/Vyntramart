import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {User} from "../models/User.model";

@Injectable()
export class UserService{
    private usersUrl = "/api/users/";
    private user: User;
    
    private UserSubject = new Subject();

    // UserChanged = this.UserSubject.asObservable();
    constructor(private http:HttpClient){}
    
    getUserfromUserName(UserName: string):Observable<string>{
        return this.http.get<string>(this.usersUrl.concat(UserName));
    }


}
