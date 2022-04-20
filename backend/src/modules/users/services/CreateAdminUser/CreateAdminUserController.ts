import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAdminUserService } from "./CreateAdminUserService";

export class CreateAdminUserController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {name, lastName, email, password, phone} = request.body;

        const createBossUser = container.resolve(CreateAdminUserService);

        const user = await createBossUser.execute({
            name, lastName, email, password, phone
        });

        return response.status(200).json({user: classToClass(user)}).send();
    }

    public async createSuperUser(request: Request, response: Response): Promise<Response>{
        const {name, lastName, email, password, phone} = request.body;

        const createBossUser = container.resolve(CreateAdminUserService);

        const user = await createBossUser.createSuperUser({
            name, lastName, email, password, phone
        });

        return response.status(200).json({user: classToClass(user)}).send();
    }
}