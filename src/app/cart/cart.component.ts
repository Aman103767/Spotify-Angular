import { Component, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartProduct } from '../models/cartProduct.model';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';
@Injectable()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit{
  products : CartProduct [] = [];
  total : number =0;
  quantity: number;
  customerId : number;
  constructor(private productService: ProductService,private router : Router){

  }
  ngOnInit(){
    // for(let product of this.products){
    //   this.total+= product.price;
    // }
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.getAllProductFromCart(this.customerId);
  }
 getAllProductFromCart(id: number){
  this.productService.getallProductFromCart(id).subscribe(data =>{
    this.products=data;
    console.log("aman",this.products);
    this.total = 0;
    for(let product of this.products){
      this.total += product.price*product.quantity;
    }
    //console.log(this.products);
},error => console.log(error));
 }

 onInput(event : any,product: CartProduct){
  
  
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  console.log(product.productId);
  console.log(this.quantity);
  console.log(this.customerId);
     this.productService.updateQuantityCart(product.productId,product.quantity,this.customerId).subscribe(data=>{
      this.getAllProductFromCart(this.customerId);
     console.log(data);
     })
 }
checkOut(){
  this.router.navigate(['/address']);
}
 deleteProduct(productId : number){
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.productService.deleteProductFromCart(productId,this.customerId).subscribe(data =>{
    if(this.products.length == 1){
       this.products = [];
       this.total = 0;
    }else{
      this.getAllProductFromCart(this.customerId);
    }
    
    
     console.log(data);
  })
  
 }
}