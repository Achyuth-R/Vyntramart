import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {User} from "../models/User.model";

@Injectable()
export class RegisterService{
    private userUrl = "/api/users/";
    private user: User;

    private UserSubject = new Subject();

    constructor(private http:HttpClient){}

    save(user: User): Observable< User >{
        return this.http.post<User>(this.userUrl, User);
    }
}