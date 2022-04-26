import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "../../users/models/User";
import { Category } from "./Category";
import { Restaurant } from "./Restaurant";

@Entity('products')
export class Product{
    @PrimaryColumn()
    id: string;
    @Column()
    product_name: string;
    @Column()
    description: string;
    @Column()
    restaurant_id: string;

    @ManyToOne(() => Restaurant)
    @JoinColumn({name: 'restaurant_id'})
    restaurant: Restaurant;    

    @Column()
    quantity: number;

    @Column()
    product_images: string;   

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @Column()
    price: number;

    @Column()
    created_by: string;

    @OneToOne(() => User)
    @JoinColumn({name: 'created_by'})
    manager: User;    

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}