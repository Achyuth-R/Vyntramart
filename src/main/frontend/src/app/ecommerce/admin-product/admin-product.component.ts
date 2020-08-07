import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/UserService';
import { Product } from '../models/product.model';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  product: Product;
  body;
  create = this.fb.group({
    // UserName : ['', Validators.required],
    // FirstName : ['', Validators.required],
    // LastName : ['', Validators.required],
    // Address : ['', Validators.required],
    // email : ['', Validators.required],
    // Password : ['', Validators.required],
    ProductName : ['', Validators.required],
    price : ['', Validators.required],
    pictureUrl : ['', Validators.required]
    });
  
    constructor(private fb : FormBuilder, private router : Router, private userService : UserService, private http : HttpClient) {

    }
  ngOnInit(): void {
  }
  onSubmit() {
    // this.user = new User(this.register.value.UserName,this.register.value.Password, this.register.value.FirstName, this.register.value.LastName, this.register.value.email, this.register.value.Address)
    // console.log(this.user);
    this.body = {
      name:this.create.value.ProductName,
      price:this.create.value.price,
      pictureUrl:this.create.value.pictureUrl
    }

    console.log(this.body);
    this.http.post<Product>("/api/products/",this.body).subscribe(data => this.body);
  }
}