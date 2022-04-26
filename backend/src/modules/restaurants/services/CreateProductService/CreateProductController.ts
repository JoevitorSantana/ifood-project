import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductService } from "./CreateProductService";

export class CreateProductController{
    public async create(request:Request, response:Response):Promise<Response>{
        const {restaurant_id} = request.params;
        const { id: created_by } = request.user;
        const {product_name, description, quantity, price, category_id} = request.body;

        const createProdut = container.resolve(CreateProductService);

        const product = await createProdut.execute({
            product_name, description, quantity, restaurant_id, price, category_id, created_by
        });

        return response.status(201).json(product).send();
    }
}