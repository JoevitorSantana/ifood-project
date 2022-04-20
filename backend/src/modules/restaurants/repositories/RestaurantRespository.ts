import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateRestaurantDTO } from "../dtos/ICreateRestaurant";
import { Category } from "../models/Category";
import { Restaurant } from "../models/Restaurant";
import { IRestaurantRepository } from "./IRestaurantRepository";

export class RestaurantRepository implements IRestaurantRepository{
    
    private repository: Repository<Restaurant>;
    private categories: Repository<Category>;

    constructor(){
        this.repository = getRepository(Restaurant);
        this.categories = getRepository(Category);
    }
    
    public async findCategory(categoryName: string): Promise<Category | undefined> {
        const category = await this.categories.findOne({categoryName});

        return category;
    }

    public async createCategory({categoryName, parentId}: ICreateCategoryDTO): Promise<Category> {
        const category = this.categories.create({
            categoryName, parentId
        });

        await this.categories.save(category);

        return category;
    }
    
    public async create({restaurantName, city, uf, district, street, number, restaurant_manager, phone, cnpj, category}: ICreateRestaurantDTO): Promise<Restaurant> {
        const restaurant = this.repository.create({
            restaurantName, city, uf, district, street, number, restaurant_manager, phone, cnpj, category
        });

        await this.repository.save(restaurant);

        return restaurant;
    }

}