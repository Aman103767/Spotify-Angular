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
<<<<<<< HEAD
  isAdmin  = false;
  customer : Customer = new Customer();
=======

>>>>>>> main

  constructor(private http: HttpClient,private router: Router) {}

  
<<<<<<< HEAD
  onCreatePost(cust : Customer) {
   
    this.http.post('http://localhost:8888/Customer/create',cust).subscribe(response => {
      console.log(response);
=======
  onCreatePost(postData: { name: string; email: string ; mobileNumber : String; password : String}) {
   
    this.http.post('http://localhost:8888/Customer/create',postData).subscribe(response => {
      console.log(response);
    console.log(postData);
>>>>>>> main
    this.goToCustomerList();
  
  });
  }
    goToCustomerList(){
   this.router.navigate(['/customerList']);
 }
<<<<<<< HEAD
 asAdmin(event){
  console.log(event);
 }
 onSubmit(event){
console.log(event)
if(event.submitter.innerText === 'Admin'){
  this.customer.role = 'ADMIN';
  this.onCreatePost(this.customer);
}else{
  this.customer.role = 'USER';
  this.onCreatePost(this.customer);
}
 }
=======


>>>>>>> main
}
