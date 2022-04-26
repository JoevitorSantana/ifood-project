import { inject, injectable } from "tsyringe";
import { Product } from "../../models/Product";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    restaurant_id: string | any;
}

@injectable()
export class ListProductsByRestaurantService{

    constructor(
        @inject('RestaurantRepository')
        private restaurantsRepository: IRestaurantRepository
    ){}

    public async execute({restaurant_id}:IRequest):Promise<Product[]>{
        const products = await this.restaurantsRepository.listProducts(restaurant_id);
        return products;
    }
}