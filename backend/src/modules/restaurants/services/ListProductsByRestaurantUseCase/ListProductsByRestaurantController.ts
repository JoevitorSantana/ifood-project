import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsByRestaurantService } from "./ListProductsByRestaurantService";

export class ListProductsByRestaurantController{
    public async list(request:Request, response:Response):Promise<Response>{
        const {restaurant_id} = request.query;

        const listProductsService = container.resolve(ListProductsByRestaurantService)

        const products = await listProductsService.execute({
            restaurant_id
        });

        return response.status(201).json(classToClass(products)).send();
    }
}