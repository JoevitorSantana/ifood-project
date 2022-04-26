import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/models/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../models/User";
import { IHashProvider } from "../../providers/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface Request{
    user_id: string;
}

interface IUpdateAvatar{
    user_id: string;
    avatarFileName: string | any;
}

interface IUpdateRequest{
    user_id: string;
    name: string;
    lastName: string,
    email: string;
    password: string;
    phone: string;
    city_id: number;
    street: string;
    district: string;
    number: number;
    old_password: string;    
}

@injectable()
export class ProfileService{

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider,
    ){}

    public async execute({user_id}:Request):Promise<User>{
        const user = await this.usersRepository.findById(user_id);

        if(!user)throw new AppError('This User does not exists!');

        return user;
    }

    public async updateUser({user_id, name, lastName, email, password, old_password, phone, street, number, district, city_id}:IUpdateRequest){
        const user = await this.usersRepository.findById(user_id);
        if(!user){
            throw new AppError('User does not exists');            
        }

        const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id){
            throw new AppError('Email already in use!');
        }

        if(password && old_password){
            const checkOldPassword = await this.hashProvider.compareHash(old_password, user.password);

            if(!checkOldPassword){
                throw new AppError('The passwords not match');
            }

            user.password = await this.hashProvider.generateHash(password);
        }

        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;
        user.street = street;
        user.district = district;
        user.number = number;
        user.city_id = city_id;

        return this.usersRepository.save(user);
    }

    public async updateAvatarProfile({user_id, avatarFileName}:IUpdateAvatar):Promise<User>{
        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new AppError('This user doesnt exists');
        }

        if(user.avatar){
            await this.storageProvider.deleteFile(user.avatar);
        }

        const fileName = await this.storageProvider.saveFile(avatarFileName);

        user.avatar = fileName;

        await this.usersRepository.save(user);

        return user;
    }
}