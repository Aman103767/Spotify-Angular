import { Category } from "./category.model";

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
}