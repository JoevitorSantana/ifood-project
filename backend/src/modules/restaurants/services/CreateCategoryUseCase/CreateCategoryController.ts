import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController{
    public async execute(request:Request, response:Response):Promise<Response>{
        const {categoryName, parentId} = request.body;

        const createCategory = container.resolve(CreateCategoryService);

        const category = await createCategory.execute({
            categoryName, parentId
        });

        return response.status(201).json(category).send();
    }
}