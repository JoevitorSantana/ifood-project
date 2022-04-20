import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Category } from "../../models/Category";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    categoryName: string;
    parentId: string;
}
@injectable()
export class CreateCategoryService{

    constructor(
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository
    ){}

    public async execute({categoryName, parentId}:IRequest):Promise<Category>{
        const verify = await this.restaurantRepository.findCategory(categoryName);

        if(verify){
            throw new AppError('this category already exists!');
        }

        const category = this.restaurantRepository.createCategory({
            categoryName, parentId
        });

        return category;
    }
}