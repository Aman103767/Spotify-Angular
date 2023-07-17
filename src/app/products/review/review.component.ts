import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Review } from 'src/app/models/review.model';

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
 review = new Review();
 constructor(private route: ActivatedRoute, private productService : ProductService) {
  console.log("value",this.value)
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.route.queryParams.subscribe(params => {
    const type = params['type'];
    // Use the 'type' parameter value as needed
    this.productId = params['productId'];
    this.reviewType = type;
    console.log(type); // Example: Output the 'type' parameter value to the console
    this.productService.getReviewOfProduct(this.customerId,this.productId).subscribe(response =>{
      console.log(response);
      this.review = response;
    })
  });


}
addReview(){
    console.log("value",this.value)
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    console.log(this.review,"reviw");
    if(this.reviewType == "ADMIN"){
        this.productService.addReviewToAdmin(this.customerId,this.productId,this.review).subscribe(response =>{
          console.log(response,"resposne");
        })
    }
    else if(this.reviewType == "PRODUCT"){
      this.productService.addReviewToProduct(this.customerId,this.productId,this.review).subscribe(response => {
        console.log(response,"response");
      })
    }
}
}
