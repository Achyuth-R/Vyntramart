import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserLoginComponent } from './ecommerce/user-login/user-login.component';
import { UserRegisterComponent } from './ecommerce/user-register/user-register.component';
import { AppComponent } from './app.component';
import { EcommerceComponent } from "./ecommerce/ecommerce.component"; 
import { AdminLoginComponent } from './ecommerce/admin-login/admin-login.component';
import { AdminProductComponent } from './ecommerce/admin-product/admin-product.component';

const routes : Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full' },
    {path: '', component: UserLoginComponent},
    {path: 'register', component: UserRegisterComponent },
    {path: 'login' , component: UserLoginComponent },
    {path: 'ecommerce', component:EcommerceComponent},
    {path: 'adminLogin', component:AdminLoginComponent},
    {path: 'adminProduct', component:AdminProductComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }