import { Expose } from "class-transformer";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('carousel')
export class Carousel{
    @PrimaryColumn()
    id: string;
    @Column()
    alt: string;
    @Column()
    image: string;
    
    @Expose({ name: 'image_url'})
    getAvatarUrl(): string | null {
        return this.image ? `${process.env.APP_API_URL}/files/carousel/${this.image}`
        : null;
    }

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}