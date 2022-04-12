import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../models/User";
import { IHashProvider } from "../../providers/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user: User;
    token: string;
}

@injectable()
export class AuthenticationService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({email, password}:IRequest):Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new AppError('Email or password incorrects!');
        }
        const passwordMatch = await this.hashProvider.compareHash(password, user.password);

        if(!passwordMatch){
            throw new AppError('Email or password incorrects!');
        }

        const token = sign({}, auth.jwt.secret, {
            subject: user.id,
            expiresIn: auth.jwt.expiresIn
        });

        return {user, token};
    }
}