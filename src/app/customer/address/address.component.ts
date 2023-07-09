import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { Product } from 'src/app/models/product.model';
=======
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
<<<<<<< HEAD
  id : number;
  customerId : number;
  customerAddresses : Address [] = []
  constructor(private productService : ProductService,
    private router : ActivatedRoute,private routerLink : Router){}
  ngOnInit(): void {
    this.getAllAddress();
  }
  getAllAddress(){
    this.customerAddresses = [];
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.productService.getAllAdddress(this.customerId).subscribe(response =>{
      let defaultAddress = null;

      for (const element of response) {
        if (element.setDefault === true) {
          defaultAddress = element;
          break;
        }
      }
      this.customerAddresses.push(defaultAddress);
      response.forEach(element =>{
        if(element.setDefault == false){
          this.customerAddresses.push(element);
        }
      })
      console.log(this.customerAddresses);
    })
  }
  remove(id){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.productService.deleteAddressById(this.customerId,id).subscribe(response =>{
      console.log(response);
      this.getAllAddress();
    })
  }
  setDefault(id){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.productService.setDefaultAddress(this.customerId,id).subscribe(response =>{
      console.log(response);
      this.getAllAddress();
      
    })  
  }

=======
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
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}
