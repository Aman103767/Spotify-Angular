import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FordetailsAddtocartComponent } from 'src/app/cart/fordetails-addtocart/fordetails-addtocart.component';
import { Content } from 'src/app/models/content.model';
import { Product } from 'src/app/models/product.model';
import { LocalStorageService } from 'src/app/shared/localstor.service';
import { ProductService } from '../product.service';
import { Review } from 'src/app/models/review.model';
import { OverlayPanelModule } from 'primeng/overlaypanel';
Injectable()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, FordetailsAddtocartComponent]
})
export class ProductComponent implements OnInit {
  @Input() product: Content;
  id: number;
  customerId: number;
  review : Review [] = []
  totalreviewCount : number;
  totalRating : number;
  totalEachStar = {
    fiveStar : 0,
    fourStar : 0,
    threeStar : 0,
    twoStar : 0,
    oneStar : 0,
  }
  avgRate = {
    singleStars: 0,
    halfStars:0,
    emptyStar: 0,
  };
  constructor(private localStor: LocalStorageService, public productService: ProductService, private router: ActivatedRoute, private fordetialsCart: FordetailsAddtocartComponent) {

  }
  ngOnInit(): void {
    this.totalRating = 0;
    let totalReviewCount = 0;
      this.productService.getAllReviews(this.product.productId).subscribe(response =>{
        this.review = response;
        this.product.review = response;
        this.review.forEach(review =>{
          this.totalRating  += review.rating;
          totalReviewCount++;
          switch(review.rating){
            case 5:
              this.totalEachStar.fiveStar++;
              break;
            case 4:
              this.totalEachStar.fourStar++;
              break;
            case 3:
              this.totalEachStar.threeStar++;
              break;
            case 2:
              this.totalEachStar.twoStar++;
              break;
            case 1:
              this.totalEachStar.oneStar++;
               break;
          }
        })
        console.log(this.review);
        if(this.totalRating != 0 && totalReviewCount != 0){
        let rating = this.totalRating/totalReviewCount;
        let singleStars = Math.floor(rating);
        let pointedStar = rating - singleStars;
        let halfStar 
        pointedStar >= 0.5 ? halfStar = 1 : halfStar = 0;
        let emptyStar = 5-singleStars;
        this.avgRate.emptyStar = emptyStar;
        this.avgRate.halfStars = halfStar;
        this.avgRate.singleStars = singleStars;
        }
      })
      this.totalreviewCount = totalReviewCount;
  }
  getRoundedUpSingleStars(): number {
    return Math.ceil(this.avgRate.singleStars);
  }
  onSelected() {

    this.productService.productSelected.emit(this.product);

  }





}
