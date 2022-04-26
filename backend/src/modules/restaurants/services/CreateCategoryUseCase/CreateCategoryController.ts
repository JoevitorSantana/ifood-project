import { classToClass } from "class-transformer";
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

        return response.status(201).json(classToClass(category)).send();
    }

    public async listCategories(request:Request, response:Response):Promise<Response>{
        const listCategory = container.resolve(CreateCategoryService);

        const categories = await listCategory.listCategories();

        return response.status(200).json(classToClass(categories));
    }

    public async uploadImage(request:Request, response:Response):Promise<Response>{

        const {category_id} = request.params;        
        const image = request.file?.filename;

        const uploadImage = container.resolve(CreateCategoryService);

        const categories = await uploadImage.uploadImage({
            category_id,
            image,
        });

        return response.status(200).json(classToClass(categories)).send();
    }
}