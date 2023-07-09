import { Category } from "./category.model";
<<<<<<< HEAD
import { Customer } from "./customer.model";
import { Review} from "./review.model";

export class Product{
    public productId: number;
    public imagePath = [];
    public mainImg : string;
=======

export class Product{
    public productId: number;
    public imagePath:string;
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
    public productName:string;
    public price: number;
    public dimension: string;
    public specification:string;
    public manufacturer:string;
<<<<<<< HEAD
    public quantity:number;
    public categoryName: string;
    public discountPercentage : number;
    public inDeliveryDays : number;
    public admin  : Customer
    public aboutItem = []
    public review : Review [] = []

=======
    public quantity:string;
    public categoryName: string;
>>>>>>> eb2d27557ec0a8ac5e2b4815807a1d55f6d09555
}