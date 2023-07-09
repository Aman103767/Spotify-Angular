import { Component, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartProduct } from '../models/cartProduct.model';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';
<<<<<<< HEAD
import { Address } from '../models/address.model';
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
@Injectable()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit{
<<<<<<< HEAD
  products : CartProduct [] = []
  discountTotal : number;
  inStock : boolean = true;
  visible : boolean = false;
  discount = 6;
  totalWithDiscount : number;
  address  = new Address();
=======
  products : CartProduct [] = [];
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  total : number =0;
  quantity: number;
  customerId : number;
  constructor(private productService: ProductService,private router : Router){

  }
  ngOnInit(){
    // for(let product of this.products){
    //   this.total+= product.price;
<<<<<<< HEAD
    console.log("ng")
    this.getAllAddress();
    // }
    this.total = 0;
    this.discountTotal = 0;
    this.totalWithDiscount =0;
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.getAllProductFromCart(this.customerId);

  }
  getAllAddress(){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.productService.getAllAdddress(this.customerId).subscribe(response =>{
      this.address = response.filter(address => address.setDefault == true)[0];
    })
=======
    // }
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.getAllProductFromCart(this.customerId);
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  }
 getAllProductFromCart(id: number){
  this.productService.getallProductFromCart(id).subscribe(data =>{
    this.products=data;
<<<<<<< HEAD
    this.total = 0;
    this.discountTotal = 0;
    this.totalWithDiscount =0;
    console.log("aman",this.products)
    for(let product of this.products){
      this.totalWithDiscount += (product.price - (product.price * ((product.discountPercentage) / 100)))*product.quantity;
      this.total += product.price*product.quantity;
      this.discountTotal +=(product.price * ((product.discountPercentage) / 100))*product.quantity;
      this.getProduct(product.productId,product);
    }
    console.log(this.products)
=======
    console.log("aman",this.products);
    this.total = 0;
    for(let product of this.products){
      this.total += product.price*product.quantity;
    }
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
    //console.log(this.products);
},error => console.log(error));
 }

<<<<<<< HEAD
 onInput(product: CartProduct){
=======
 onInput(event : any,product: CartProduct){
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  
  
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
<<<<<<< HEAD
incQuan(product){
  this.products[0].quantity++;
  this.onInput(product);
 }
 dscQuan(product){
  this.products[0].quantity--;
  this.onInput(product);
  this.inStock = true;
 }
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
 deleteProduct(productId : number){
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.productService.deleteProductFromCart(productId,this.customerId).subscribe(data =>{
    if(this.products.length == 1){
       this.products = [];
       this.total = 0;
<<<<<<< HEAD
       this.ngOnInit()
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
    }else{
      this.getAllProductFromCart(this.customerId);
    }
    
    
     console.log(data);
  })
  
 }
<<<<<<< HEAD

getProduct(id,product: CartProduct){
  this.productService.getProductById(id).subscribe(response =>{
    if(product.quantity == response.quantity){
      this.inStock = false;
    }
  })
}

order(){
  this.visible = true;
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
}
showDialog() {
  this.visible = true;
}
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}