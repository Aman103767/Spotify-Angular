import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { CookieService } from 'ngx-cookie-service';
>>>>>>> main
import { LoginForm } from '../models/LoginForm';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';
import { LocalStorageService } from '../shared/localstor.service';
<<<<<<< HEAD
import { JwtResponse } from '../models/jwtReponse.model';



 
=======
>>>>>>> main

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
   loginForm : LoginForm = new LoginForm();
<<<<<<< HEAD
   constructor(private router : Router ,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){
=======
   constructor(private router : Router ,private cookieService : CookieService,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){
>>>>>>> main

   }
   onSubmit(){

    this.productService.login(this.loginForm).subscribe(response => {
    //  const sessionId = response.headers.get('Set-Cookie').split(';')[0].split('=')[1];
<<<<<<< HEAD
    console.log(response);
    localStorage.setItem("token",response.token);
     this.currentUser(response);
=======
    
    if(this.cookieService.get('JSESSIONID')!= undefined && this.cookieService.get('JSESSIONID').length>0){
      //  console.log("aman",this.cookieService.get('JSESSIONID'));
      //  const expirationDate = new Date();
      //  expirationDate.setDate(expirationDate.getDate()+7);
      //  this.cookieService.set('JSESSIONID',this.cookieService.get('JSESSIONID'),expirationDate);
    
    }else
    this.cookieService.set('JSESSIONID',response.value);


      console.log(response);
      this.currentUser();
      this.router.navigate(['/products']);
>>>>>>> main
    },error => {
      console.log(error);
    })
   }

<<<<<<< HEAD
   currentUser(jwtReponse : JwtResponse){
   console.log(jwtReponse)
    this.productService.currentUser(jwtReponse).subscribe(response=>{
=======
   currentUser(){

    this.productService.currentUser().subscribe(response=>{
>>>>>>> main
      console.log(response);
      this.localStorage.setItem('customerId',response.customerId);
    },error => {
      console.log(error);
    })
   }
}
