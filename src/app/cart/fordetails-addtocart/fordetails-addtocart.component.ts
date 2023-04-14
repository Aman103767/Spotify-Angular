import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/products/product.service';
import { LocalStorageService } from 'src/app/shared/localstor.service';
import { CartComponent } from '../cart.component';
@Injectable()
@Component({
  selector: 'app-fordetails-addtocart',
  templateUrl: './fordetails-addtocart.component.html',
  styleUrls: ['./fordetails-addtocart.component.css'],
   providers :[CartComponent,ProductService]
})
export class FordetailsAddtocartComponent implements OnInit {
customerId : number;
  id : number;
ngOnInit(){

}
constructor(private productService : ProductService,public cart:CartComponent,private router: ActivatedRoute
 , private localstor : LocalStorageService,private route: Router){

}
 onSubmit(){
   this.id =  this.router.snapshot.params['id'];
  
   this.addToCart();
   this.saveData(this.customerId);
   this.cart.getAllProductFromCart(this.customerId);
 

 }
 goToCart(){
  this.route.navigate['/cart'];
 }


 addToCart(){
  this.productService.addtocart(this.customerId,this.id).subscribe(data =>{
     //  console.log(data);
     this.goToCart();
  },error =>{
   
   console.log(error);
  
  });
 }
 saveData(id: number){
    this.localstor.setItem('customerId',id);
 }
 
callCart(){
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.cart.getAllProductFromCart(this.customerId);
}
}
