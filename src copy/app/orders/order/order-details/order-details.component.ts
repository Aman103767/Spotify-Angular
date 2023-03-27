import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/models/order.model';
import { ProductService } from 'src/app/products/product.service';
@Injectable()
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
   order$ : Observable<Orders>;
   id : number;
 ngOnInit(){
 this.orderDetails();
 }
 constructor(private productService : ProductService,private router : ActivatedRoute){}
 orderDetails(){
  this.id = this.router.snapshot.params['id'];
  console.log(this.id);
 this.order$ = this.productService.getOrderById(this.id);

  }

}
