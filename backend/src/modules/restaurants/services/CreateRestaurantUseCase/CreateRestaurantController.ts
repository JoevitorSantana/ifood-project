import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRestaurantService } from "./CreateRestaurantService";

export class CreateRestaurantController{
    public async execute(request: Request, response: Response):Promise<Response>{
        const restaurant_manager = request.user.id;

        const {restaurantName, city_id, district, street, number, phone, cnpj, category, distance, end_time, start_time} = request.body;

        const createRestaurant = container.resolve(CreateRestaurantService);

        const restaurant = await createRestaurant.execute({
            restaurantName, city_id, district, street, number, restaurant_manager, phone, cnpj, category, distance, end_time, start_time
        });

        return response.status(200).json(restaurant);
    }
}