import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../models/LoginForm';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';
import { LocalStorageService } from '../shared/localstor.service';
import { JwtResponse } from '../models/jwtReponse.model';



 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username : string;
  password : string;
   loginForm : LoginForm = new LoginForm();
   constructor(private router : Router ,private localStorage: LocalStorageService, private http: HttpClient,private productService : ProductService){

   }
   onSubmit(){

    this.productService.login(this.loginForm).subscribe(response => {
    //  const sessionId = response.headers.get('Set-Cookie').split(';')[0].split('=')[1];
    console.log(response);
    localStorage.setItem("token",response.token);
     this.currentUser(response);
    },error => {
      console.log(error);
    })
   }

   currentUser(jwtReponse : JwtResponse){
   console.log(jwtReponse)
    this.productService.currentUser(jwtReponse).subscribe(response=>{
      console.log(response);
      this.localStorage.setItem('customerId',response.customerId);
    },error => {
      console.log(error);
    })
   }
}
