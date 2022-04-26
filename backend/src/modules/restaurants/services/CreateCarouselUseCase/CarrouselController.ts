import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CarouselService } from "./CarouselService";

export class CarouselController{
    public async create(request: Request, response:Response):Promise<Response>{
        const {alt} = request.body;
        const image = request.file?.filename;

        const carouselService = container.resolve(CarouselService);

        const carousel = await carouselService.execute({
            alt,
            image,
        });

        return response.json(classToClass(carousel)).send();
    }

    public async list(request:Request, response:Response):Promise<Response>{
        const carouselService = container.resolve(CarouselService);        
        const carousel = await carouselService.list();
        return response.status(200).json(classToClass(carousel));       
    }
}