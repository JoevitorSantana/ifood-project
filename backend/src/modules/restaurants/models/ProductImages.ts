import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";
import { Product } from "./Product";

@Entity('product_images')
export class ProductImages{
    @PrimaryColumn()
    id: string;
    @Column()
    product_id: string;    

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