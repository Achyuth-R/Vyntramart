  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { Subscription } from 'rxjs/internal/Subscription';
  import { HttpClient } from '@angular/common/http';
  import { UserService } from '../services/UserService';
  import { User } from '../models/User.model';
  import { stringify } from '@angular/compiler/src/util';

  @Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
  })
  export class UserRegisterComponent implements OnInit {
    user: User;
    body;
    register = this.fb.group({
      UserName : ['', Validators.required],
      FirstName : ['', Validators.required],
      LastName : ['', Validators.required],
      Address : ['', Validators.required],
      email : ['', Validators.required],
      Password : ['', Validators.required],
      });
    
      constructor(private fb : FormBuilder, private router : Router, private userService : UserService, private http : HttpClient) {

      }
    ngOnInit(): void {
    }
    onSubmit() {
      this.user = new User(this.register.value.UserName,this.register.value.Password, this.register.value.FirstName, this.register.value.LastName, this.register.value.email, this.register.value.Address)
      console.log(this.user);
      this.body = {
        username:this.register.value.UserName,
        firstname:this.register.value.FirstName,
        lastname:this.register.value.LastName,
        password:this.register.value.Password,
        email:this.register.value.email,
        address:this.register.value.Address
      }
      this.http.post<User>("/api/users/",this.body).subscribe(data => this.body);
    }
  }
