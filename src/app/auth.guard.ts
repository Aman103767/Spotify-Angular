import { isPlatformWorkerApp } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { CookieService } from 'ngx-cookie-service';
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
import { Observable } from 'rxjs';
import { ProductService } from './products/product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isloggedIn : boolean = false;
<<<<<<< HEAD
  constructor(private router : Router,private productService : ProductService){
=======
<<<<<<< HEAD
  constructor(private router : Router,private productService : ProductService){
=======
  constructor(private router : Router,private productService : ProductService,private cookieService : CookieService){
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
<<<<<<< HEAD
   if(localStorage.getItem('token')!= undefined && localStorage.getItem('token').length >0){
=======
<<<<<<< HEAD
   if(localStorage.getItem('token')!= undefined && localStorage.getItem('token').length >0){
=======
   if(this.cookieService.get('JSESSIONID')!= undefined && this.cookieService.get('JSESSIONID').length>0){
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

        return true;

      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
  currentUser(){
    
  }
}
