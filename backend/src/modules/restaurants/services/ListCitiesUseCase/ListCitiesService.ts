import { inject, injectable } from "tsyringe";
import { City } from "../../../users/models/City";
import { Restaurant } from "../../models/Restaurant";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    city_id: number | any;
}

@injectable()
export class ListCitiesService{
    constructor(
        @inject('RestaurantRepository')
        private restaurantsRepository: IRestaurantRepository
    ){}

    public async execute():Promise<City[]>{
        const cities = await this.restaurantsRepository.listCities();
        return cities;
    }

    public async listRestaurantsByRegion({city_id}:IRequest):Promise<Restaurant[]>{
        const restaurants = await this.restaurantsRepository.listRestaurantsByRegion(city_id);
        return restaurants;
    }
}