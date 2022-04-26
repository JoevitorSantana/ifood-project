export interface ICreateProductDTO{
    product_name: string;
    description: string;
    restaurant_id: string;
    quantity: number;
    price: number;
    category_id: string;  
    created_by: string;  
}