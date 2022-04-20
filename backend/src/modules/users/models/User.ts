import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity("users")
export class User{
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    role: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    @Exclude()
    password: string;
    @Column()
    phone: string;
    @Column()
    city: string;
    @Column()
    uf: string;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    district: string;
    @Column()
    avatar: string;
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