import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Orders } from 'src/app/models/order.model';
import { ProductService } from 'src/app/products/product.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CartProduct } from 'src/app/models/cartProduct.model';
import { DatePipe } from '@angular/common';
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
  constructor(private productService: ProductService,private router : Router,private orderDetails : OrderDetailsComponent, private datePipe: DatePipe ){}
  onSelected(){

    this.productService.OrderSelected.emit(this.order);
  
  }
 giveOrderId(orderId : number){
  this.router.navigate([`orders/${orderId}`]);
 }

}
