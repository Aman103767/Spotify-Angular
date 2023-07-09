import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import $ from "jquery";
import { ButtonModule } from 'primeng/button';
import 'magnific-popup';
import { NgxImageZoomComponent } from 'ngx-image-zoom/public-api';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @ViewChild('productImage', { static: true }) productImage: ElementRef;
  id : number;
  viewImage : string;
  dayOfDelivery : string;


  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(response =>{
      this.product = response;
     this.viewImage =  this.product.imagePath[0]
      console.log(this.product);
      this.dayOfDelivery =this.getFutureDate( this.product.inDeliveryDays);
      console.log("admin",response.admin)
    })

  }
  getFutureDate(daysToAdd: number): string {
    const future = new Date();
    future.setDate(future.getDate() + daysToAdd);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return future.toLocaleDateString('en-US', options);
  }
  ngAfterViewInit() {

    
    
  }
  constructor(private datePipe: DatePipe,private productService : ProductService,private router : ActivatedRoute) {


    // Set tomorrow's date by adding one day to the current date
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.tomorrow.setHours(0, 0, 0, 0);

    // Calculate the difference between now and tomorrow in milliseconds
    const diff = this.tomorrow.getTime() - this.now.getTime();

    // Convert the difference to hours and minutes
    this.hours = Math.floor(diff / (1000 * 60 * 60));
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
  }

  location = "Deliver to Gunjan - Gwalior 474011‌";
  product  = new Product();
    avgRate  = { singleStars : 4,
                 halfStars : 1,
                 emptyStar: 1
                  };
    clickImg(event){
      //this.viewImage = event;
      console.log(event);
      this.viewImage = event;
    } 
    getRoundedUpSingleStars(): number {
      return Math.ceil(this.avgRate.singleStars);
    }
    today: Date = new Date();
    now: Date = new Date();
    tomorrow: Date = new Date();
    hours: number;
    minutes: number;  
    company : string = "Appario Retail Private Ltd";

    @ViewChild('container', { static: true }) container: ElementRef;
 

  formattedDate(): string {
    return this.datePipe.transform(this.today, 'd MMMM');
  }
  onNextClick() {
  //  const containerWidth = this.container.nativeElement.offsetWidth;
   // if (containerWidth > 0) {
    //  setTimeout(() => {
        this.container.nativeElement.scrollLeft += 90;
        if(this.container.nativeElement.scrollLeft >= 90){
          this.prevbutton = true;
        }
        if(this.container.nativeElement.scrollLeft >= 200){
          this.nextbutton = false;
        }
     // },0);
     /// console.log( this.container.nativeElement.scrollLeft);
     console.log(this.container.nativeElement.scrollLeft,this.nextbutton);
    
  }
  onPrevClick() {
    this.container.nativeElement.scrollLeft -= 90;
    if(this.container.nativeElement.scrollLeft === 0){
      this.prevbutton = false;
      this.nextbutton = true;
    }else{
      this.prevbutton = true; 
      this.nextbutton = true;
    }

  }
 prevbutton  = false;
 nextbutton  = true;
 showMore = false;
 customerId : number;
 addToCart(productId: number){
  this.id = this.router.snapshot.params['id'];
  const value = localStorage.getItem('customerId');
  this.customerId = JSON.parse(value);
  this.productService.addtocart(this.customerId,productId).subscribe(data =>{
     console.log(data);
    alert(data);
  },error =>{
   
   console.log(error);
  
  });
 }


}
