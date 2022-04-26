import { getRepository, Repository } from "typeorm";
import { City } from "../../users/models/City";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { ICreateRestaurantDTO } from "../dtos/ICreateRestaurant";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";
import { IRestaurantRepository } from "./IRestaurantRepository";

export class RestaurantRepository implements IRestaurantRepository{
    
    private repository: Repository<Restaurant>;
    private categories: Repository<Category>;
    private products: Repository<Product>;
    private cities: Repository<City>;

    constructor(){
        this.repository = getRepository(Restaurant);
        this.categories = getRepository(Category);
        this.products = getRepository(Product);
        this.cities = getRepository(City);
    }    

    public async saveCategory(category: Category):Promise<Category>{
        const savecategory = await this.categories.save(category);
        return savecategory;
    }

    public async findCategoryById(category_id: string): Promise<Category | undefined> {
        const category = await this.categories.findOne(category_id);
        return category;
    }

    public async save(restaurant: Restaurant): Promise<Restaurant> {
        const restaurante = await this.repository.save(restaurant);
        return restaurante;
    }

    public async showRestaurant(restaurant_id: string): Promise<Restaurant | undefined> {
        const restaurant = await this.repository.findOne(restaurant_id);
        return restaurant;
    }
    
    public async listCategories(): Promise<Category[]> {
        const category = await this.categories.find();        
        return category;
    }
    
    public async listRestaurantsByRegion(city_id: number): Promise<Restaurant[]> {
        const restaurants = await this.repository.find({
            where: {
                city_id,
            }
        })        

        return restaurants;
    }
    
    public async listCities(): Promise<City[]> {
        const city = await this.cities.find();
        return city;
    }

    public async listProducts(restaurant_id: string): Promise<Product[]> {
        const products = await this.products.find({
            where: {
                restaurant_id,
            },                            
        });

        return products;
    }
    
    
    public async findRestaurantManager(restaurant_id: string): Promise<string | undefined> {
        const restaurant = await this.repository.findOne(restaurant_id);
        
        const manager = restaurant?.restaurant_manager;

        return manager;
    }

    public async createProduct({product_name, description, quantity, restaurant_id, price, category_id, created_by}: ICreateProductDTO): Promise<Product> {
        const product = this.products.create({
            product_name, description, quantity, restaurant_id, price, category_id, created_by
        });

        await this.products.save(product);

        return product;
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
    
    public async create({restaurantName, city_id, district, street, number, restaurant_manager, phone, cnpj, category, distance, end_time, start_time}: ICreateRestaurantDTO): Promise<Restaurant> {
        const restaurant = this.repository.create({
            restaurantName, city_id, district, street, number, restaurant_manager, phone, cnpj, category, distance, end_time, start_time
        });

        await this.repository.save(restaurant);

        return restaurant;
    }

}