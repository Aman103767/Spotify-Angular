import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '../models/content.model';
import { GetProduct } from '../models/getProduct.model';
import { Pagination } from '../models/pagination.model';
import { PaginationDTO } from '../models/paginationDto';

import { ProductService } from './product.service';
<<<<<<< HEAD
import { ThemeService } from '../theme/theme-service';
import { LocalStorageService } from '../shared/localstor.service';
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
Injectable()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
<<<<<<< HEAD
  styleUrls: ['./products.component.css','../theme/normal-theme.css'],
=======
  styleUrls: ['./products.component.css'],
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  
})
export class ProductsComponent implements OnInit {
  field : string;
<<<<<<< HEAD
   products : Content []
  //  = [
  //   {
  //   productId : 1,
  //   imagePath : ["https://m.media-amazon.com/images/I/81itQPVn-GL._AC_UY327_FMwebp_QL65_.jpg"]
  //   ,
  //   productName : "boAt Rockerz 450",
  //   price : 4999,
  //   dimension : "aman",
  //   specification : "aman",
  //   manufacturer : "aman",
  //   quantity : 33,
  //   category : undefined
  // }
  // ];
=======
  products : Content [] = [];
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  name : string;
  pageNumber : number = 0;
  direction: boolean =false;
  pagination : Pagination = new Pagination();
  pageSize : number=8;
  private currentPageSubject = new BehaviorSubject<number>(0);
  
  currentPage$ = this.currentPageSubject.asObservable();
  paginationDto : PaginationDTO = new PaginationDTO();
<<<<<<< HEAD
  normalTheme = false;

 constructor(public productService : ProductService,public  themeService : ThemeService, localStroage : LocalStorageService){
=======

 constructor(public productService : ProductService){
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

 }

 
 ngOnInit(): void {
<<<<<<< HEAD
  this.pagination.totalPages= 10;
=======
  // this.pagination.totalPages= 10;
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
  this.field = "productName"
  this.paginationDto.pageNumber = 0;
  this.paginationDto.pageSize = 8;
  this.paginationDto.sortBy = this.field;
  this.paginationDto.direction = false;;
   this.productService.getPaginationData(this.paginationDto).subscribe(data =>{
     this.pagination = data;
     this.products = data.content;
     console.log(this.pagination);
    this.currentPageSubject.next(data.pageable.pageNumber);
     })
<<<<<<< HEAD
  
  let theme = localStorage.getItem('Theme');
  if(theme=== 'true'){
    this.normalTheme = true;
  }else {
    this.normalTheme = false;
  }
  
}
=======
 }
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
 goToPage(name? : string , pageNumber : number = 0) {
   this.paginationDto.pageNumber = pageNumber;
   if(this.pageSize <1)
   this.pageSize = 8;
      this.paginationDto.name = this.name;
    this.paginationDto.pageSize = this.pageSize;
  this.paginationDto.sortBy = this.field;
  this.paginationDto.direction = this.direction;;
   this.productService.getPaginationData(this.paginationDto).subscribe(data =>{
  
     this.pagination = data;
     console.log(this.pagination);
     this.products = data.content;
     this.currentPageSubject.next(pageNumber);
    
    
     })
 }
 goToNextOrPreviousPage(direction? : string,name? : string){
   this.goToPage(name,direction === 'forward' ? this.currentPageSubject.value + 1 :this.currentPageSubject.value-1) ;
 }


 filter(){
  this.paginationDto.pageNumber = this.pageNumber;
  this.paginationDto.pageSize = this.pageSize;
  this.paginationDto.name = this.name;
  this.paginationDto.sortBy = this.field;
  this.paginationDto.direction = this.direction;
 this.productService.getPaginationData(this.paginationDto).subscribe(data =>{
      this.pagination = data;
      this.products = this.pagination.content;
      console.log(this.pagination);
    
     
      })
  }
  

sortByField(){

  this.paginationDto.pageNumber = this.pageNumber;
  this.paginationDto.pageSize = this.pageSize;
  this.paginationDto.name = this.name;
  this.paginationDto.sortBy = this.field;
  this.paginationDto.direction = this.direction;

 this.productService.getPaginationData(this.paginationDto).subscribe(data =>{
      this.pagination = data;
      this.products = this.pagination.content;
      console.log(this.pagination);
     
      })
  
}
 sortBy(field :string){
    this.field = field;
    this.sortByField();
 }
  order(flag : boolean){
    this.direction = flag;
    this.sortByField();
  }
size(size : number){
  this.pageSize = size;
  this.sortByField();
}
}