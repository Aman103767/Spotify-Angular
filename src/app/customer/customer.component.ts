import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [MessageService]
})
export class CustomerComponent {
  title = 'E-Commerce';
  loadedPosts = [];
  isAdmin  = false;
  customer : Customer = new Customer();

  constructor(private http: HttpClient,private router: Router, public messageSevice : MessageService) {}

  
  onCreatePost() {
    console.log(this.customer,"Customer")
    this.http.post('http://localhost:8888/customer/create',this.customer).subscribe(response => {
      console.log(response);
    // this.goToCustomerList();
  
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
  this.customer.role = 'ADMIN';
  this.onCreatePost();
 }
}