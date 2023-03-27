import { Component, Injectable, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { FordetailsAddtocartComponent } from '../cart/fordetails-addtocart/fordetails-addtocart.component';
import { FetchCustomerListComponent } from '../customer/fetch-customer-list/fetch-customer-list.component';
import { ProductService } from '../products/product.service';
import { ProductComponent } from '../products/product/product.component';
import { ProductsComponent } from '../products/products.component';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ProductsComponent,FetchCustomerListComponent]
})
export class HeaderComponent  implements OnInit{
 

  ngOnInit(): void {
    this.loginAuth();
  }
  collapsed = true;
  constructor(private productsComponent: ProductsComponent,private fetchCust : FetchCustomerListComponent,private productService : ProductService
    ,public fordetailsCart : FordetailsAddtocartComponent,public cart : CartComponent,private cookieService : CookieService,private router : Router){

  }
  customerId : number;
  getItem(){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.cart.getAllProductFromCart(this.customerId);
  }
 logout(){
  this.cookieService.set('JSESSIONID',"");
  this.router.navigate(['/']);
 console.log("logout");

 }
 loginAuth(){
 const session =  this.cookieService.get('JSESSIONID')
  if(session != undefined && session.length>0 ){
  return false;
  }
  else return true;
 }


}
