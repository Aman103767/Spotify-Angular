import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable()
@Component({
  selector: 'app-auth-interceptor',
  templateUrl: './auth-interceptor.component.html',
  styleUrls: ['./auth-interceptor.component.css']
})
export class AuthInterceptorComponent implements HttpInterceptor{
 

  constructor(private cookieService :CookieService){

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     const sessionId = this.cookieService.get('JSESSIONID');
     if(sessionId){
      const authRequest = request.clone({
          withCredentials: true,
          headers : request.headers.set('Cookie',`JSESSIONID=${sessionId}`).set('Access-Control-Allow-Origin', '*')
      })
      return next.handle(authRequest);
     }else{
      return next.handle(request);
     }
  }
}