import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../models/User";

export interface IUsersRepository{
    findById(id: string):Promise<User | undefined>;    
    findByEmail(email: string):Promise<User | undefined>;
    create(data: ICreateUserDTO):Promise<User>;
    createBossUser(data: ICreateUserDTO):Promise<User>;
    createSuperUserAdmin(data: ICreateUserDTO):Promise<User>;
    save(user: User):Promise<User>;
}