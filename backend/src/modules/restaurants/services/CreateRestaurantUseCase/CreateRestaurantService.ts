import { inject, injectable } from "tsyringe";
import { Restaurant } from "../../models/Restaurant";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    restaurantName: string;
    city: string;
    uf: string;
    district: string;
    street: string;
    number: number;
    restaurant_manager: string;
    phone: string;
    cnpj: string;    
    category: string;  
}

@injectable()
export class CreateRestaurantService{

    constructor(        
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository
    ){}

    public async execute({restaurantName, city, uf, district, street, number, restaurant_manager, phone, cnpj, category}:IRequest):Promise<Restaurant>{        

        const restaurant = await this.restaurantRepository.create({
            restaurantName, city, uf, district, street, number, restaurant_manager, phone, cnpj, category
        });

        return restaurant;

    }
}