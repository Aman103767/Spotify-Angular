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
<<<<<<< HEAD
  isAdmin  = false;
  customer : Customer = new Customer();
=======

>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

  constructor(private http: HttpClient,private router: Router) {}

  
<<<<<<< HEAD
  onCreatePost(cust : Customer) {
    console.log(cust)
    this.http.post('http://localhost:8888/Customer/create',cust).subscribe(response => {
      console.log(response);
=======
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
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
    this.goToCustomerList();
  
  });
  }
    goToCustomerList(){
   this.router.navigate(['/customerList']);
 }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
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
<<<<<<< HEAD
=======
=======


>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}
