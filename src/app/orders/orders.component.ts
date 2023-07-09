import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Orders } from '../models/order.model';
import { ProductService } from '../products/product.service';
<<<<<<< HEAD
import { ProductDto } from '../models/productDto.model';
import { Address } from '../models/address.model';
import { CartProduct } from '../models/cartProduct.model';
=======
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
<<<<<<< HEAD
orders : Orders [] 
// = [{
//   orderId : 1,
//   orderDate: new Date(),
//   customer : new Customer(),
//   products : new ProductDto [

//   ],
//   address : new Address(),
//   orderStatus : "Confirmed",
// }
// ];
customerId : number;

products : CartProduct [] = [

  {
id : 12,

    productId : 1,
    imagePath: 
      "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    productName: "Apple iPhone 14 (128 GB) - Blue",
    price : 89900,
    quantity: 50,
dimension : 23,
manufacturer: "NOkia",
discountPercentage : 5
}
]
=======
orders : Orders [] = [];
customerId : number;
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
constructor(private productService : ProductService){

}
ngOnInit(): void {
  this.getAllOrders();
}
getAllOrders(){
 
    const value = localStorage.getItem('customerId');
    this.customerId = JSON.parse(value);
    //console.log(this.customerId);
       this.productService.getAllOrder(this.customerId).subscribe(data=>{
       console.log(data);
       this.orders = data;
       })
}


}
