import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address : Address = new Address();
  customerId: number;
  constructor(private productService : ProductService,private router: Router){}
  ngOnInit(): void {
    
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.productService.getCustomerById(this.customerId).subscribe(data=>{
    //console.log(data);
    
    if(data.address!= null)
    this.address= data.address;
    //console.log(this.address);
  })

  }

  onSubmit(){
    console.log("aman");
    const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);

      this.productService.Order(this.customerId,this.address).subscribe(data=>{
        console.log(data);
      
        this.goToOrder();
      })
   
  }
  goToOrder(){
  this.router.navigate(['/orders']);
  }
}
