import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/models/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Category } from "../../models/Category";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";

interface IRequest{
    categoryName: string;
    parentId: string;
}

interface IUploadImageRequest{
    category_id: string;
    image: string | any;
}

@injectable()
export class CreateCategoryService{

    constructor(
        @inject('RestaurantRepository')
        private restaurantRepository: IRestaurantRepository,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider
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

    public async listCategories():Promise<Category[]>{
        const categories = await this.restaurantRepository.listCategories();

        return categories;
    }

    public async uploadImage({category_id, image}:IUploadImageRequest){
        const category = await this.restaurantRepository.findCategoryById(category_id);
        if(!category)throw new AppError('This category does not exists');

        await this.storageProvider.saveFile(image);
        category.image = image;
        await this.restaurantRepository.saveCategory(category);
    }
}