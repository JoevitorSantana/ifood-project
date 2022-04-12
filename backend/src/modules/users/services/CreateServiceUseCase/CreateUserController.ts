import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateServiceService";

export class CreateUserController{
    public async create(request: Request, response: Response):Promise<Response>{
        const { name, lastName, email, password, phone} = request.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            name, lastName, email, password, phone
        });        

        return response.status(200).json(user).send();

    }
}