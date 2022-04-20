import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../models/User";
import { IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository{

    private repository: Repository<User>;
    
    constructor(){
        this.repository = getRepository(User);
    }    
    
    public async createSuperUserAdmin({name, lastName, email, password, phone}: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            lastName,
            email,
            password,
            phone,        
            role: 'superAdmin',    
        });
 
        await this.repository.save(user);

        return user;
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
            role: 'user',    
        });
 
        await this.repository.save(user);

        return user;
    }

    public async createBossUser({name, lastName, email, password, phone}: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            lastName,
            email,
            password,
            phone,        
            role: 'admin',    
        });

        await this.repository.save(user);

        return user;
    }

}