import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { RestaurantService } from "./UpdateRestaurantService";

export class RestaurantProfileController{
    public async show(request:Request, response:Response):Promise<Response>{
        const {restaurant_id} = request.params;
        const profileService = container.resolve(RestaurantService);
        const profile = await profileService.execute({
            restaurant_id,
        });
        return response.status(200).json(classToClass(profile)).send();
    }   

    public async update(request:Request, response:Response):Promise<Response>{
        const user_id = request.user.id;
        const {restaurant_id} = request.params;
        const {            
            restaurantName,    
            phone,
            city_id,
            street,
            district,
            number,
            cnpj,
            end_time,
            start_time,
            distance,
            rate,
        } = request.body;

        const cover_image_url = request.file?.filename;

        const profileService = container.resolve(RestaurantService);

        const restaurant = await profileService.updateRestaurant({
            user_id,
            restaurant_id,
            restaurantName,    
            phone,
            city_id,
            street,
            district,
            number,
            cnpj,
            end_time,
            start_time,
            distance,
            cover_image_url,
            rate
        })

        return response.status(201).json(classToClass(restaurant)).send();
    }

    public async updateAvatar(request:Request, response:Response):Promise<Response>{
        const user_id = request.user.id;

        const {restaurant_id} = request.params;
        
        const profileService = container.resolve(RestaurantService);

        const restaurant = await profileService.updateRestaurantAvatar({
            user_id,
            restaurant_id,
            avatarFileName: request.file?.filename
        });

        return response.status(201).json(classToClass(restaurant)).send();        
    }
}