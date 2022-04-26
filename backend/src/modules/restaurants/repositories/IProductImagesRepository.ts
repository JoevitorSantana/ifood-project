import { ProductImages } from "../models/ProductImages";

export interface IProductImageRepository{
    create(product_id:string, image_name: string, created_by: string):Promise<ProductImages>;
    listImages(product_id: string):Promise<ProductImages[] | undefined>;
} 