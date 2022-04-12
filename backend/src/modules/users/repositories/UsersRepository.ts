import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../models/User";
import { IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository{

    private repository: Repository<User>;
    
    constructor(){
        this.repository = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.repository.findOne({id});
        return user;
    }
    
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({email});
        return user;
    }

    public async create({name, lastName, email, password, phone}: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            lastName,
            email,
            password,
            phone,            
        });
 
        await this.repository.save(user);

        return user;
    }

}