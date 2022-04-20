import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('categories')
export class Category{
    @PrimaryColumn()
    id: string;
    @Column()
    categoryName: string;
    @Column()
    parentId: string;
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