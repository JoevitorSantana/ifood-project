import { Expose } from "class-transformer";
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
    @Column()
    image: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @Expose({ name: 'image_url'})
    getAvatarUrl(): string | null {
        return this.image ? `${process.env.APP_API_URL}/files/uploads/${this.image}`
        : null;
    }

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}