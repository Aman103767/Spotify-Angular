import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { CookieService } from 'ngx-cookie-service';
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
import { LoginForm } from '../models/LoginForm';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';
import { LocalStorageService } from '../shared/localstor.service';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
import { JwtResponse } from '../models/jwtReponse.model';



 
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< HEAD
  
  username : string;
  password : string;
   loginForm : LoginForm = new LoginForm();
   constructor(private router : Router ,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){
=======
 
   loginForm : LoginForm = new LoginForm();
<<<<<<< HEAD
   constructor(private router : Router ,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){
=======
   constructor(private router : Router ,private cookieService : CookieService,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

   }
   onSubmit(){

    this.productService.login(this.loginForm).subscribe(response => {
    //  const sessionId = response.headers.get('Set-Cookie').split(';')[0].split('=')[1];
<<<<<<< HEAD
    console.log(response);
    localStorage.setItem("token",response.token);
     this.currentUser(response);
=======
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
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
    },error => {
      console.log(error);
    })
   }

<<<<<<< HEAD
   currentUser(jwtReponse : JwtResponse){
   console.log(jwtReponse)
    this.productService.currentUser(jwtReponse).subscribe(response=>{
=======
<<<<<<< HEAD
   currentUser(jwtReponse : JwtResponse){
   console.log(jwtReponse)
    this.productService.currentUser(jwtReponse).subscribe(response=>{
=======
   currentUser(){

    this.productService.currentUser().subscribe(response=>{
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
      console.log(response);
      this.localStorage.setItem('customerId',response.customerId);
    },error => {
      console.log(error);
    })
   }
}
