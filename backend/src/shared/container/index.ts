import { container } from "tsyringe";
import { IRestaurantRepository } from "../../modules/restaurants/repositories/IRestaurantRepository";
import { RestaurantRepository } from "../../modules/restaurants/repositories/RestaurantRespository";
import '../../modules/users/providers'
import './providers';
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";
import { IProductImageRepository } from "../../modules/restaurants/repositories/IProductImagesRepository";
import { ProductImagesRepository } from "../../modules/restaurants/repositories/ProductImagesRepository";
import { ICarouselRepository } from "../../modules/restaurants/repositories/ICarouselRepository";
import { CarouselRepository } from "../../modules/restaurants/repositories/CarouselRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);

container.registerSingleton<IRestaurantRepository>(
    'RestaurantRepository',
    RestaurantRepository
)

container.registerSingleton<IProductImageRepository>(
    'ProductsImageRepository',
    ProductImagesRepository
)

container.registerSingleton<ICarouselRepository>(
    'CarouselRepository',
    CarouselRepository
)