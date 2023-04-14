import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './models/customer.model';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'E-Commerce';
  loadedPosts = [];
  customers : Customer [] = [];

  constructor(private http: HttpClient,private productService : ProductService) {}

  ngOnInit() {
   
    
  }
  

  onCreatePost(postData: { name: string; email: string ; mobileNumber : String; password : String}) {
   
    this.http.post('http://localhost:8888/Customer/create',postData).subscribe(response => {
      console.log(response);
    console.log(postData);
  });
  }



  
}
