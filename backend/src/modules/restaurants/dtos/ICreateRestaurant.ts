export interface ICreateRestaurantDTO{
    restaurantName: string;
    city_id: number;    
    district: string;
    street: string;
    number: number;
    restaurant_manager: string;
    phone: string;
    cnpj: string;    
    category: string;    
    start_time: number;
    end_time: number;    
    distance: number;
}