import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateRestaurantDTO } from "../dtos/ICreateRestaurant";
import { Category } from "../models/Category";
import { Restaurant } from "../models/Restaurant";

export interface IRestaurantRepository{
    create(data:ICreateRestaurantDTO):Promise<Restaurant>;
    createCategory(data:ICreateCategoryDTO):Promise<Category>;
    findCategory(categoryName: string):Promise<Category | undefined>;
}