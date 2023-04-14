import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Orders } from 'src/app/models/order.model';
import { ProductService } from 'src/app/products/product.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
Injectable()
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order : Orders;
  id : number;
  ngOnInit(){

  }
  constructor(private productService: ProductService,private router : Router,private orderDetails : OrderDetailsComponent){}
  onSelected(){

    this.productService.OrderSelected.emit(this.order);
  
  }
 giveOrderId(orderId : number){
  this.router.navigate([`orders/${orderId}`]);
 }

}
