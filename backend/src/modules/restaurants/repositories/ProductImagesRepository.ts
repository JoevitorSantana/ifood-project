import { getRepository, Repository } from "typeorm";
import { ProductImages } from "../models/ProductImages";
import { IProductImageRepository } from "./IProductImagesRepository";

export class ProductImagesRepository implements IProductImageRepository{
    
    private repository: Repository<ProductImages>;

    constructor(){
        this.repository = getRepository(ProductImages);
    }
    public async listImages(product_id: string): Promise<ProductImages[] | undefined> {
        const images = await this.repository.find({
            where: {product_id}
        });

        return images;
    }
    
    async create(product_id: string, image_name: string, created_by: string): Promise<ProductImages> {
        const productImage = this.repository.create({
            product_id, image_name, created_by
        })

        await this.repository.save(productImage);

        return productImage;
    }

}