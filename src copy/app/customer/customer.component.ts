import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'E-Commerce';
  loadedPosts = [];


  constructor(private http: HttpClient,private router: Router) {}

  
  onCreatePost(postData: { name: string; email: string ; mobileNumber : String; password : String}) {
   
    this.http.post('http://localhost:8888/Customer/create',postData).subscribe(response => {
      console.log(response);
    console.log(postData);
    this.goToCustomerList();
  
  });
  }
    goToCustomerList(){
   this.router.navigate(['/customerList']);
 }


}
