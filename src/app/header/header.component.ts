import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { FordetailsAddtocartComponent } from '../cart/fordetails-addtocart/fordetails-addtocart.component';
import { FetchCustomerListComponent } from '../customer/fetch-customer-list/fetch-customer-list.component';
import { ProductService } from '../products/product.service';
import { ProductComponent } from '../products/product/product.component';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router';
import { ThemeService } from '../theme/theme-service';
@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../home-page/home-page.component.css',"../theme/normal-theme.css"],
  providers: [ProductsComponent,FetchCustomerListComponent]
})
export class HeaderComponent  implements OnInit{

  @Input() normalTheme = false; 
 
  @Input() cartProducts : number =0;
  ngOnInit(): void {
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.getAllProductFromCart(this.customerId);
  }
  collapsed = true;
  constructor(private productsComponent: ProductsComponent,private fetchCust : FetchCustomerListComponent,private productService : ProductService
    ,public fordetailsCart : FordetailsAddtocartComponent,public cart : CartComponent,private router : Router,private themeService:ThemeService){

  }
  customerId : number;
  getItem(){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.cart.getAllProductFromCart(this.customerId);
  }
 logout(){
 
 }
 loginAuth(){
 
 }
 getAllProductFromCart(id: number){
  this.productService.getallProductFromCart(id).subscribe(data =>{
    this.cartProducts = data.length;
},error => {
  console.log(error)
} );
 }

}
