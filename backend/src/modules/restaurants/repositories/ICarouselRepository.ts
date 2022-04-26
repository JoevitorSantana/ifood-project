import { Carousel } from "../models/Carousel";

export interface ICarouselRepository{
    create(alt: string, image: string):Promise<Carousel>;
    list():Promise<Carousel[]>;
}