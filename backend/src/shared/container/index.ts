import { container } from "tsyringe";
import { IRestaurantRepository } from "../../modules/restaurants/repositories/IRestaurantRepository";
import { RestaurantRepository } from "../../modules/restaurants/repositories/RestaurantRespository";
import '../../modules/users/providers'
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);

container.registerSingleton<IRestaurantRepository>(
    'RestaurantRepository',
    RestaurantRepository
)