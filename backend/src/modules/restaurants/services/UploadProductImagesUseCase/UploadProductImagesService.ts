import { inject, injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/models/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Product } from "../../models/Product";
import { Restaurant } from "../../models/Restaurant";
import { IProductImageRepository } from "../../repositories/IProductImagesRepository";

interface IRequest{
    product_id: string;
    image_name: string[];
    created_by: string;
}

@injectable()
export class UploadProductImagesService{

    private productsRepository: Repository<Product>;
    private restaurantRepository: Repository<Restaurant>;

    constructor(
        @inject('ProductsImageRepository')
        private productImagesRepository: IProductImageRepository,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider,       
    ){
        this.productsRepository = getRepository(Product);
        this.restaurantRepository = getRepository(Restaurant);
    }
        

    async execute({product_id, image_name, created_by}:IRequest){        

        const product = await this.productsRepository.findOne(product_id);        
        const restaurant_id = product?.restaurant_id;        
        const restaurant = await this.restaurantRepository.findOne(restaurant_id);
        const restaurant_manager = restaurant?.restaurant_manager;                

        if(created_by !== restaurant_manager){
            throw new AppError('You should be manager of this restaurant to add products photos');
        }        
             
        image_name.map(async(image) => {
            await this.productImagesRepository.create(product_id, image, created_by);
            await this.storageProvider.save(image, "products");
        })
    }
}