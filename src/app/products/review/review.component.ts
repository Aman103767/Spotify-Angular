import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Review } from 'src/app/models/review.model';
import { Orders } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { ProductDto } from 'src/app/models/productDto.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
 value : number ;
 reviewType : string;
 customerId : number;
 productId : number;
 order : Orders = new Orders();
 product : ProductDto = new ProductDto();
 review = new Review();
 orderId : number;
 constructor(private route: ActivatedRoute, private productService : ProductService) {
  console.log("value",this.value)
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.route.queryParams.subscribe(params => {
    this.reviewType  = params['type'];
    this.productId = params['productId'];
    this.orderId = params['orderId'];
    this.productService.getOrderById(this.orderId).subscribe(response =>{
      this.order = response;
      this.order.products.forEach(product =>{
        if(product.productId == this.productId){
          this.product = product;
        }
      })
    })
    if(this.reviewType == "PRODUCT"){
      this.getReviewProduct();
    } else if(this.reviewType == "ADMIN"){
      this.getReviewAdmin();
    }
  });


}
getReviewProduct(){
  this.productService.getReviewOfProduct(this.customerId,this.productId, this.orderId).subscribe(response =>{
    console.log(response);
    this.review = response; 
  })
}
getReviewAdmin(){
  this.productService.getReviewOfAdmin(this.customerId,this.productId, this.orderId).subscribe(response =>{
    console.log(response);
    this.review = response; 
  })
}
addReview(){
    console.log("value",this.value, this.review)

    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    console.log(this.review,"reviw");
    if(this.reviewType == "ADMIN"){
        this.productService.addReviewToAdmin(this.customerId,this.productId,this.orderId, this.review).subscribe(response =>{
          console.log(response,"resposne");
          this.getReviewAdmin();
        })
    }
    else if(this.reviewType == "PRODUCT"){
      this.productService.addReviewToProduct(this.customerId,this.productId, this.orderId,this.review).subscribe(response => {
        console.log(response,"response");
        this.getReviewProduct();

      })
    }
}
}
