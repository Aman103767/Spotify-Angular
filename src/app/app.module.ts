import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';
import { Product } from './models/product.model';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { FetchCustomerListComponent } from './customer/fetch-customer-list/fetch-customer-list.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { FordetailsAddtocartComponent } from './cart/fordetails-addtocart/fordetails-addtocart.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { AddressComponent } from './customer/address/address.component';
import { OrderDetailsComponent } from './orders/order/order-details/order-details.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { LoginComponent } from './login/login.component';

import { AuthInterceptorComponent } from './auth-interceptor/auth-interceptor.component';
import { AuthGuard } from './auth.guard';





const appRoutes : Routes = [
    { path : '', component : LoginComponent},
    { path: 'customer',component : CustomerComponent},
    { path: 'products', component : ProductsComponent},
    { path: 'products/:id',component: ProductsComponent},
    { path: 'customerList',component : FetchCustomerListComponent , canActivate: [AuthGuard] },
    { path: 'updateCustomer/:id',component: UpdateCustomerComponent, canActivate: [AuthGuard]},
    { path: 'customer-details/:id',component : CustomerDetailsComponent, canActivate: [AuthGuard]},
    { path: 'createProduct',component : CreateProductComponent, canActivate: [AuthGuard]},
    { path: 'productList',component : ProductListComponent , canActivate: [AuthGuard] },
    { path : 'updateProduct/:id', component : UpdateProductComponent , canActivate: [AuthGuard]},
    { path : 'forCartDetails/:id', component : FordetailsAddtocartComponent , canActivate: [AuthGuard]},
    { path : 'cart',component: CartComponent, canActivate: [AuthGuard]},
    { path : 'orders',component:OrdersComponent, canActivate: [AuthGuard]},
    { path : 'address',component: AddressComponent, canActivate: [AuthGuard]},
    { path : 'orders/:id',component : OrderDetailsComponent, canActivate: [AuthGuard]},

];

@NgModule({
  declarations: [AppComponent,HeaderComponent,
     ProductsComponent,ProductComponent,
      CartComponent, CustomerComponent, 
      FetchCustomerListComponent, UpdateCustomerComponent,
      CustomerDetailsComponent, CreateProductComponent,
       ProductListComponent, UpdateProductComponent,
        FordetailsAddtocartComponent,
        OrderComponent,OrdersComponent, AddressComponent, OrderDetailsComponent, 
         DropdownDirective, LoginComponent,AuthInterceptorComponent],
  imports: [BrowserModule, FormsModule, 
    HttpClientModule,RouterModule.forRoot(appRoutes)],
  providers: [AuthGuard,ProductService,CartComponent,FordetailsAddtocartComponent,OrderDetailsComponent,ProductsComponent,{provide : HTTP_INTERCEPTORS, useClass: AuthInterceptorComponent,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
