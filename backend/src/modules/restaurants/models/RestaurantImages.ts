import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('restaurant_images')
export class RestaurantImages{
    @PrimaryColumn()
    id: string;
    @Column()
    restaurant_id: string;    
    @Column()
    image_name: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    created_by: string;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}