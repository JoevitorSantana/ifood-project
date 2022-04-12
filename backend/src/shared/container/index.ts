import { container } from "tsyringe";
import '../../modules/users/providers'
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);