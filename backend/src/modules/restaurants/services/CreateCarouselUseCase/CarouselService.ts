import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/models/IStorageProvider";
import { Carousel } from "../../models/Carousel";
import { ICarouselRepository } from "../../repositories/ICarouselRepository";

interface IRequest{
    alt: string;
    image: string | any;
}

@injectable()
export class CarouselService{
    constructor(
        @inject('CarouselRepository')
        private carouselRepository: ICarouselRepository,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider,
    ){}

    public async execute({alt, image}:IRequest):Promise<Carousel>{
        const carousel = await this.carouselRepository.create(alt, image);
        await this.storageProvider.save(image, 'carousel');
        return carousel;
    }

    public async list():Promise<Carousel[]>{
        const carousel = await this.carouselRepository.list();
        return carousel;
    }
}