import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../models/User";
import { IHashProvider } from "../../providers/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;    
}
@injectable()
export class CreateAdminUserService {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ){}

    public async execute({name, lastName, email, password, phone }:IRequest):Promise<User>{
        const userExists = await this.usersRepository.findByEmail(email);

        if(userExists){
            throw new AppError('This Email already exists');
        }

        const passwordHash = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.createBossUser({
            name, lastName, email, password: passwordHash, phone
        });

        return user;
    };

    public async createSuperUser({name, lastName, email, password, phone}:IRequest):Promise<User>{
        const userExists = await this.usersRepository.findByEmail(email);

        if(userExists){
            throw new AppError('This Email already exists');
        }

        const passwordHash = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.createSuperUserAdmin({
            name, lastName, email, password: passwordHash, phone
        });

        return user;
    }
}