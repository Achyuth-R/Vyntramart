import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/UserService';
import { User } from '../models/User.model';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user: User;
  sub: Subscription;
  BackendUserName: string;
  BackendPassword: string;
  login = this.fb.group({
    UserName : ['', Validators.required],
    Password : ['', Validators.required],
    });
  hasUnitNumber = false;
  pass;
  private usersUrl = "/api/users/";
  ngOnInit(){

  }

  constructor(private fb : FormBuilder, private router : Router, private userService : UserService, private http : HttpClient) {

  }
  onSubmit() {
    var loginUserName = this.login.value.UserName;
    // this.http.get(this.usersUrl.concat(loginUserName)).subscribe(res => {temp = res;});
    // this.http.get(this.usersUrl.concat(this.login.value.UserName)).subscribe(res => {this.pass=res});
    // this.userService.getUserfromUserName(stringify(this.login.value.UserName)).subscribe(res => {this.pass = res;});
    // if(this.login.value.Username.substring(0,5))
    var strUser = stringify(this.login.value.UserName);
    console.log(strUser.substring(0,5)==='admin');

    if(strUser.substring(0,5) === 'admin'){
      // this.http.get(this.usersUrl.concat(this.login.value.UserName)).subscribe(res => {this.pass=res});
      this.http.get(this.usersUrl.concat(strUser)).subscribe(res => {this.pass = res;});
      console.log(this.pass);
      if(this.pass != null){
        if (this.pass.password == this.login.value.Password){
              this.router.navigate(['/adminProduct']);
            }else{
              console.log(this.pass.password);
              alert("Enter proper password");
          }
      }
      else{
        alert("Enter proper username");
      }
    }
    else{
      alert("Enter admin username");
    }
  }
}
