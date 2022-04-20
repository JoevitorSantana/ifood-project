import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRestaurantService } from "./CreateRestaurantService";

export class CreateRestaurantController{
    public async execute(request: Request, response: Response):Promise<Response>{
        const restaurant_manager = request.user.id;

        const {restaurantName, city, uf, district, street, number, phone, cnpj, category} = request.body;

        const createRestaurant = container.resolve(CreateRestaurantService);

        const restaurant = await createRestaurant.execute({
            restaurantName, city, uf, district, street, number, restaurant_manager, phone, cnpj, category
        });

        return response.status(200).json(restaurant);
    }
}