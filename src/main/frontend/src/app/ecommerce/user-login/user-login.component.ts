import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/UserService';
import { User } from '../models/User.model';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
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
    var temp;
    var loginUserName = this.login.value.UserName;
    // this.http.get(this.usersUrl.concat(loginUserName)).subscribe(res => {temp = res;});
    this.http.get(this.usersUrl.concat(this.login.value.UserName)).subscribe(res => {this.pass=res});
    // this.userService.getUserfromUserName(stringify(this.login.value.Username)).subscribe(res => {this.pass = res;});
    console.log(this.login.value.UserName);
    console.log(this.pass);
    if (this.pass.password == this.login.value.Password){
      this.router.navigate(['/ecommerce']);
    }else{
      console.log(this.pass.password);
      alert("Enter proper password");
    }
    // console.log(this.usersUrl.concat(loginUserName))
    // console.log(this.login.value.UserName);
    // console.log(this.pass);
    // this.router.navigate(['/ecommerce']);
    // alert(this.login.get("Password"));
  }
}
