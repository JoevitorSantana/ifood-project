import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProfileService } from "./ProfileService";

export class ProfileController{
    public async show(request:Request, response:Response):Promise<Response>{
        const { id: user_id } = request.user;
        const profileService = container.resolve(ProfileService);
        const profile = await profileService.execute({
            user_id
        });
        return response.status(200).json(classToClass(profile)).send();
    }   

    public async update(request:Request, response:Response):Promise<Response>{
        const user_id = request.user.id;
        const {name, lastName, email, password, old_password, phone, street, district, number, city_id} = request.body;

        const profileService = container.resolve(ProfileService);

        const user = await profileService.updateUser({
            user_id, name, lastName, email, password, old_password, phone, street, district, number, city_id
        })

        return response.status(201).json(classToClass(user)).send();
    }

    public async updateAvatar(request:Request, response:Response):Promise<Response>{
        
        const profileService = container.resolve(ProfileService);

        const user = await profileService.updateAvatarProfile({
            user_id: request.user.id,
            avatarFileName: request.file?.filename
        });

        return response.status(201).json(classToClass(user)).send();        
    }
}