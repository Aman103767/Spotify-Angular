import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Orders } from '../models/order.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
orders : Orders [] = [];
customerId : number;
constructor(private productService : ProductService){

}
ngOnInit(): void {
  this.getAllOrders();
}
getAllOrders(){
 
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    //console.log(this.customerId);
       this.productService.getAllOrder(this.customerId).subscribe(data=>{
       console.log(data);
       this.orders = data;
       })
}


}
