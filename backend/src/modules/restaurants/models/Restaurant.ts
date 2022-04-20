import { v4 } from 'uuid';
import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, Column, OneToOne } from 'typeorm';
import {User} from '../../users/models/User';

@Entity('restaurants')
export class Restaurant{
    @PrimaryColumn()
    id: string;
    @Column()
    restaurantName: string;
    @Column()
    city: string;
    @Column()
    uf: string;
    @Column()
    district: string;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    restaurant_manager: string;

    @OneToOne(() => User)
    @JoinColumn({name: 'restaurant_manager'})
    manager: User;

    @Column()
    phone: string;
    @Column()
    cnpj: string;
    @Column()
    rate: number;
    @Column()
    category: string;
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