import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CssSelector } from "@angular/compiler";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Address } from "../models/address.model";
import { CartProduct } from "../models/cartProduct.model";
import { Content } from "../models/content.model";
import { Customer } from "../models/customer.model";
import { GetProduct } from "../models/getProduct.model";
import { LoginForm } from "../models/LoginForm";
import { Orders } from "../models/order.model";
import { Pagination } from "../models/pagination.model";
import { PaginationDTO } from "../models/paginationDto";

import { Product } from "../models/product.model";
<<<<<<< HEAD
import { JwtResponse } from "../models/jwtReponse.model";
import { AuthAddress } from "../models/AuthAddress.model";
=======
<<<<<<< HEAD
import { JwtResponse } from "../models/jwtReponse.model";
=======
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

@Injectable() 
export class ProductService {
   productSelected = new EventEmitter<Content>();
   OrderSelected = new EventEmitter<Orders>();

 

constructor(private http: HttpClient) { 
 
}
getProductList(): Observable<Content[]>{
  return this.http.get<Content[]>('http://localhost:8888/Customer/getAllProduct');
}


getCustomerList(): Observable<Customer[]> {
  return this.http.get<Customer[]>('http://localhost:8888/admin/viewAll');
}
getCustomerById(id : number) : Observable<Customer> {
  return this.http.get<Customer>(`http://localhost:8888/admin/viewById/${id}`)
}
updateCustomer(id: number ,customer : Customer): Observable<Object>{
  return this.http.put(`http://localhost:8888/Customer/update/${id}`,customer,{responseType : 'text'});

}
deleteCustomer(id: number) : Observable<Object> {
  return this.http.delete(`http://localhost:8888/Customer/delete/${id}`,{responseType : 'text'});
}
createProduct(product: Product): Observable<Object>{
  return this.http.post('http://localhost:8888/product/create',product);
}
getProductById(id : number): Observable<Product>{
  return this.http.get<Product>(`http://localhost:8888/admin/getProductById/${id}`);
}
updateProduct(id: number,product: Product): Observable<Object>{
  return this.http.put(`http://localhost:8888/product/updateProduct/${id}`,product,{responseType : 'text'});
}
deleteProduct(id: number) : Observable<Object>{
  return this.http.delete(`http://localhost:8888/admin/removeProduct/${id}`,{responseType : 'text'});
}
getSortedProductList(): Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:8888/Customer/getSortedProductByAnyFieldAsc/price');
}
getSortedProductListDesc(): Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:8888/Customer/getSortedProductByAnyFieldDsc/price');
}
getSortedAnyField(field : string): Observable<Product[]>{
  return this.http.get<Product[]>(`http://localhost:8888/Customer/getSortedProductByAnyFieldAsc/${field}`);
}
addtocart(customerId : number,productId : number) : Observable<Object>{
  return this.http.get(`http://localhost:8888/Customer/cart/${customerId}/1/${productId}`,{responseType : 'text'});
}
getallProductFromCart(customerId : number) : Observable<CartProduct []>{
  return this.http.get<CartProduct []>(`http://localhost:8888/Customer/getAllProductAddedInCart/${customerId}`);
}
updateQuantityCart(productId: number ,quantity : number, customerId : number) : Observable<Object>{
  return this.http.get<Object>(`http://localhost:8888/Customer/updatingQuantity/${productId}/${quantity}/${customerId}`);
}
deleteProductFromCart(productId: number,customerId: number) : Observable<Object>{
  return this.http.delete(`http://localhost:8888/Customer/removeProductFromCart/${productId}/${customerId}`,{responseType: 'text'});
}
getAllOrder(customerId : number): Observable<Orders []>{
  return this.http.get<Orders []>(`http://localhost:8888/Customer/getAllOrdersByCustomer/${customerId}`);
}
Order(customerId:number,address : Address): Observable<Object>{
  return this.http.post(`http://localhost:8888/order/orderProduct/${customerId}`,address);
}
getOrderById(orderId : number) : Observable<Orders>{
  return this.http.get<Orders>(`http://localhost:8888/order/getOrderById/${orderId}`)
  
}
getPaginationData(paginationDto : PaginationDTO) : Observable<Pagination> {
  return this.http.post<Pagination>(`http://localhost:8888/product/pagination`,paginationDto);
}
login(loginForm: LoginForm){
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // })

  return this.http.post<any>('http://localhost:8888/login',loginForm);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
// currentUser(): Observable<Customer> {
//   return this.http.get<Customer>('http://localhost:8888/current-user');
// }
currentUser(jwtResponse : JwtResponse): Observable<Customer>{
  return this.http.post<Customer>('http://localhost:8888/current-user',jwtResponse);
<<<<<<< HEAD
=======
=======
currentUser(): Observable<Customer> {
  return this.http.get<Customer>('http://localhost:8888/current-user');
>>>>>>> main
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}
logout(): Observable<string>{
  return this.http.get<string>('http://localhost:8888/logout');
}
checkCurrentUser(): Observable<Customer>{
  return this.http.get<Customer>('http://localhost:8888/current-user');
}
<<<<<<< HEAD
addAddresss(authAddress : AuthAddress) : Observable<Object>{
  return this.http.post('http://localhost:8888/address/add',authAddress,{responseType: 'text'});
}
getAllAdddress(customerId) : Observable<Address []>{
  return this.http.get<Address []>(`http://localhost:8888/address/getAllAddress/${customerId}`);
} 
getAddressById(addressId) : Observable<Address>{
  return this.http.get<Address>(`http://localhost:8888/address/getById/${addressId}`);
}
deleteAddressById(customerId,addressId) : Observable<Object>{
  return this.http.delete(`http://localhost:8888/address/deleteById/${customerId}/${addressId}`,{responseType: 'text'});
}
setDefaultAddress(customerId, addressId) : Observable<Object>{
  return this.http.get(`http://localhost:8888/address/setDefault/${customerId}/${addressId}`,{responseType: 'text'});
}
=======


>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}
