<<<<<<< HEAD
import { Component, Injectable, Input, OnInit } from '@angular/core';
=======
import { Component, Injectable, OnInit } from '@angular/core';
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
import { CartComponent } from '../cart/cart.component';
import { FordetailsAddtocartComponent } from '../cart/fordetails-addtocart/fordetails-addtocart.component';
import { FetchCustomerListComponent } from '../customer/fetch-customer-list/fetch-customer-list.component';
import { ProductService } from '../products/product.service';
import { ProductComponent } from '../products/product/product.component';
import { ProductsComponent } from '../products/products.component';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ThemeService } from '../theme/theme-service';
=======
<<<<<<< HEAD
=======
import { CookieService } from "ngx-cookie-service";
>>>>>>> main
import { Router } from '@angular/router';
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['./header.component.css'],
  providers: [ProductsComponent,FetchCustomerListComponent]
})
export class HeaderComponent  implements OnInit{
 

  ngOnInit(): void {
    this.loginAuth();
  }
  collapsed = true;
  constructor(private productsComponent: ProductsComponent,private fetchCust : FetchCustomerListComponent,private productService : ProductService
<<<<<<< HEAD
    ,public fordetailsCart : FordetailsAddtocartComponent,public cart : CartComponent,private router : Router){
=======
    ,public fordetailsCart : FordetailsAddtocartComponent,public cart : CartComponent,private cookieService : CookieService,private router : Router){
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

  }
  customerId : number;
  getItem(){
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    this.cart.getAllProductFromCart(this.customerId);
  }
 logout(){
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
 
 }
 loginAuth(){
 
<<<<<<< HEAD
 }
 getAllProductFromCart(id: number){
  this.productService.getallProductFromCart(id).subscribe(data =>{
    this.cartProducts = data.length;
},error => {
  console.log(error)
} );
 }

=======
=======
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
>>>>>>> main
 }


>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}
