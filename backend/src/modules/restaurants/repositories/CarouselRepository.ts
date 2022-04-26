import { getRepository, Repository } from "typeorm";
import { Carousel } from "../models/Carousel";
import { ICarouselRepository } from "./ICarouselRepository";

export class CarouselRepository implements ICarouselRepository{

    private repository: Repository<Carousel>;
    constructor(){
        this.repository = getRepository(Carousel);
    }

    public async list():Promise<Carousel[]> {
        const carousel = await this.repository.find();
        return carousel;
    }

    public async create(alt: string, image: string): Promise<Carousel> {
        const carousel = this.repository.create({
            alt, image
        });
        await this.repository.save(carousel);
        return carousel;
    }
}