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
  isAdmin  = false;
  customer : Customer = new Customer();

  constructor(private http: HttpClient,private router: Router) {}

  
  onCreatePost(cust : Customer) {
    console.log(cust)
    this.http.post('http://localhost:8888/Customer/create',cust).subscribe(response => {
      console.log(response);
    this.goToCustomerList();
  
  });
  }
    goToCustomerList(){
   this.router.navigate(['/customerList']);
 }
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
}
