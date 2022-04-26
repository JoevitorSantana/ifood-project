import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/models/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Restaurant } from "../../models/Restaurant";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    restaurant_id: string;
}

interface IUpdateAvatar{
    user_id: string;
    restaurant_id: string;
    avatarFileName: string | any;
}

interface IUpdateRequest{
    user_id: string;
    restaurant_id: string;
    restaurantName: string;    
    phone: string;
    city_id: number;
    street: string;
    district: string;
    number: number;
    cnpj: string;  
    start_time: number;
    end_time: number;
    cover_image_url: string | any;
    distance: number;    
    rate: number;
}

@injectable()
export class RestaurantService{

    constructor(
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository,        
        @inject('StorageProvider')
        private storageProvider: IStorageProvider,
    ){}

    public async execute({restaurant_id}:IRequest):Promise<Restaurant>{
        const restaurant = await this.restaurantRepository.showRestaurant(restaurant_id);

        if(!restaurant)throw new AppError('This Restaurant does not exists!');        

        return restaurant;
    }

    public async updateRestaurant({
        user_id,
        restaurant_id,
        restaurantName,    
        phone,
        city_id,
        street,
        district,
        number,
        cnpj,
        cover_image_url,
        distance,
        end_time,
        start_time,
        rate
    }:IUpdateRequest){
        const restaurant = await this.restaurantRepository.showRestaurant(restaurant_id);
        if(!restaurant){
            throw new AppError('This Restaurant not exists');            
        }       
        
        if (restaurant.restaurant_manager !== user_id){
            throw new AppError('You need be manager of this restaurant to update informations')
        }

        const image = cover_image_url;

        if(image){
            await this.storageProvider.save(image, 'restaurants');
        }        

        restaurant.restaurantName = restaurantName;
        restaurant.cnpj = cnpj;        
        restaurant.phone = phone;
        restaurant.street = street;
        restaurant.district = district;
        restaurant.number = number;
        restaurant.city_id = city_id;
        restaurant.cover_image_url = cover_image_url;
        restaurant.distance = distance;
        restaurant.end_time = end_time;
        restaurant.start_time = start_time;
        restaurant.rate = rate;

        return this.restaurantRepository.save(restaurant);
    }

    public async updateRestaurantAvatar({user_id, restaurant_id, avatarFileName}:IUpdateAvatar):Promise<Restaurant>{
        const restaurant = await this.restaurantRepository.showRestaurant(restaurant_id);

        if(!restaurant){
            throw new AppError('This restaurant doesnt exists');
        }

        if(restaurant.restaurant_manager !== user_id){
            throw new AppError('You need be manager of this restaurant to update informations')
        }

        if(restaurant.avatar){
            await this.storageProvider.deleteFile(restaurant.avatar);
        }

        const fileName = await this.storageProvider.saveFile(avatarFileName);

        restaurant.avatar = fileName;

        await this.restaurantRepository.save(restaurant);

        return restaurant;
    }    
}
