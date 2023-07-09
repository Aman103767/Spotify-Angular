import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthAddress } from 'src/app/models/AuthAddress.model';
import { Address } from 'src/app/models/address.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.css']
})
export class AddEditAddressComponent implements OnInit{
  customerId : number;
  id: number;
  address : Address = new Address();
  
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.productService.getAddressById(this.id).subscribe(response =>{
      this.address = response;
    })
  }
  constructor(private productService : ProductService,private router: ActivatedRoute){

  }
  addAddress(){
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  let token = localStorage.getItem('token');
  let auth = new AuthAddress(); 
  auth.token = token;
  auth.address = this.address;
  this.productService.addAddresss(auth).subscribe(data=>{
  });
}



}
