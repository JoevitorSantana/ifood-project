import { City } from "../../users/models/City";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { ICreateRestaurantDTO } from "../dtos/ICreateRestaurant";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";

export interface IRestaurantRepository{
    create(data:ICreateRestaurantDTO):Promise<Restaurant>;
    createCategory(data:ICreateCategoryDTO):Promise<Category>;
    createProduct(data:ICreateProductDTO):Promise<Product>;
    findCategory(categoryName: string):Promise<Category | undefined>;
    findRestaurantManager(restaurant_id: string):Promise<string | undefined>;
    listProducts(restaurant_id: string):Promise<Product[]>;
    listCities():Promise<City[]>;
    listRestaurantsByRegion(city_id: number):Promise<Restaurant[]>;
    listCategories():Promise<Category[]>;
    showRestaurant(restaurant_id: string):Promise<Restaurant | undefined>;
    save(restaurant: Restaurant):Promise<Restaurant>;
    findCategoryById(category_id: string):Promise<Category | undefined>;
    saveCategory(category:Category):Promise<Category>;
}