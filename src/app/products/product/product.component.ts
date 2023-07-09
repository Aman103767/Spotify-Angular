import { Component, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FordetailsAddtocartComponent } from 'src/app/cart/fordetails-addtocart/fordetails-addtocart.component';
import { Content } from 'src/app/models/content.model';
import { Product } from 'src/app/models/product.model';
import { LocalStorageService } from 'src/app/shared/localstor.service';
import { ProductService } from '../product.service';
Injectable()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService,FordetailsAddtocartComponent]
})
export class ProductComponent {
@Input() product : Content;
id : number;
customerId : number;
    avgRate  = { singleStars : 4,
                 halfStars : 1,
                 emptyStar: 1
                  };
constructor(private localStor : LocalStorageService, public productService: ProductService,private router : ActivatedRoute,private fordetialsCart: FordetailsAddtocartComponent){

}
getRoundedUpSingleStars(): number {
  return Math.ceil(this.avgRate.singleStars);
}
onSelected(){

  this.productService.productSelected.emit(this.product);

}



  

}
