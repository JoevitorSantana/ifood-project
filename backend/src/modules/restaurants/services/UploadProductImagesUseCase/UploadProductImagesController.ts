import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadProductImagesService } from "./UploadProductImagesService";

interface IFiles{
    filename: string;
}

export class UploadProductImagesController{
    async handle(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const created_by = request.user.id;
        const images = request.files as IFiles[];
        const uploadProductsImage = container.resolve(UploadProductImagesService);
        const image_name = images.map((file) => file.filename);

        await uploadProductsImage.execute({
            product_id: id,
            image_name,
            created_by,
        })

        return response.status(201).json(image_name).send();
    }
}