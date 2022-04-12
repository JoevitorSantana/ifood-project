import 'reflect-metadata';
import { User } from "../../models/User";
import { inject, injectable } from "tsyringe";
import { IHashProvider } from "../../providers/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest{
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

@injectable()
export class CreateUserService{

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({name, lastName, email, password, phone}:IRequest):Promise<User>{
        const usersExists = await this.usersRepository.findByEmail(email);

        if(usersExists){
            throw new AppError('This Email already exists');
        }

        const passwordHash = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            name, lastName, email, password: passwordHash, phone
        })

        return user;

    }
}