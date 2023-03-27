import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '../models/content.model';
import { GetProduct } from '../models/getProduct.model';
import { Pagination } from '../models/pagination.model';
import { PaginationDTO } from '../models/paginationDto';

import { ProductService } from './product.service';
Injectable()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  field : string;
  products : Content [] = [];
  name : string;
  pageNumber : number = 0;
  direction: boolean =false;
  pagination : Pagination = new Pagination();
  pageSize : number=8;
  private currentPageSubject = new BehaviorSubject<number>(0);
  
  currentPage$ = this.currentPageSubject.asObservable();
  paginationDto : PaginationDTO = new PaginationDTO();

 constructor(public productService : ProductService){

 }

 
 ngOnInit(): void {
  // this.pagination.totalPages= 10;
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
 }
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