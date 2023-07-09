import { Category } from "./category.model";
<<<<<<< HEAD
import { Customer } from "./customer.model";
import { Review } from "./review.model";

export class Content {
    public productId: number;
    public imagePath = [];
    public mainImg : string;
    public productName:string;
    public price: number;
    public dimension: string;
    public specification:string;
    public manufacturer:string;
    public quantity:number;
    public categoryName: string;
    public discountPercentage : number;
    public inDeliveryDays : number;
    public adminDetails : Customer;
    public aboutItem = []
    public review : Review [] = []
=======

export class Content {
    productId : number;
    imagePath : string;
    productName : string;
    price : number;
    dimension : string;
    specification : string;
    manufacturer : string;
    quantity : number;
    category : Category;
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}