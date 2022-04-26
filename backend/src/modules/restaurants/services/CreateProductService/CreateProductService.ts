
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Product } from "../../models/Product";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    product_name: string;
    description: string;
    quantity: number;
    restaurant_id: string;
    price: number;
    category_id: string;
    created_by: string;
}


@injectable()
export class CreateProductService{
    
    constructor(
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository
    ){}

    public async execute({product_name, description, quantity, restaurant_id, price, category_id, created_by}:IRequest):Promise<Product>{        
        
        const manager = await this.restaurantRepository.findRestaurantManager(restaurant_id);

        if(manager !== created_by){
            throw new AppError('You should be manager of this restaurant to add a new product!')
        }

        const product = await this.restaurantRepository.createProduct({
            product_name, description, quantity, restaurant_id, price, category_id, created_by
        });

        return product;
    }
}