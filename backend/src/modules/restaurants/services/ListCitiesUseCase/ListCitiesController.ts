import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCitiesService } from "./ListCitiesService";

export class ListCitiesController{
    public async list(request: Request, response:Response):Promise<Response>{
        const listCities = container.resolve(ListCitiesService);
        const cities = await listCities.execute();
        return response.status(200).json(classToClass(cities));
    }

    public async listByRegion(request: Request, response:Response):Promise<Response>{
        const {city_id} = request.query;
        const listCities = container.resolve(ListCitiesService);
        const cities = await listCities.listRestaurantsByRegion({city_id});
        return response.status(200).json(classToClass(cities));
    }
}