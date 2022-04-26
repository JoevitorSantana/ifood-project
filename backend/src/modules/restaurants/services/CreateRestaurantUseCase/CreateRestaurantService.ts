import { inject, injectable } from "tsyringe";
import { Restaurant } from "../../models/Restaurant";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    restaurantName: string;
    city_id: number;    
    district: string;
    street: string;
    number: number;
    restaurant_manager: string;
    phone: string;
    cnpj: string;    
    category: string;  
    start_time: number;
    end_time: number;    
    distance: number;    
}

@injectable()
export class CreateRestaurantService{

    constructor(        
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository
    ){}

    public async execute({restaurantName, city_id, district, street, number, restaurant_manager, phone, cnpj, category, distance, end_time, start_time}:IRequest):Promise<Restaurant>{        

        const restaurant = await this.restaurantRepository.create({
            restaurantName, city_id, district, street, number, restaurant_manager, phone, cnpj, category, distance, end_time, start_time
        });

        return restaurant;

    }
}