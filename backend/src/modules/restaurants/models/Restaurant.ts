import { v4 } from 'uuid';
import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, Column, OneToOne } from 'typeorm';
import {User} from '../../users/models/User';
import { City } from '../../users/models/City';
import { Exclude, Expose } from 'class-transformer';

@Entity('restaurants')
export class Restaurant{
    @PrimaryColumn()
    id: string;
    @Column()
    restaurantName: string;
    @Column()
    city_id: number;

    @OneToOne(() => City)
    @JoinColumn({name: 'city_id'})
    city: City;

    @Column()
    district: string;
    @Column()
    street: string;
    @Column()
    number: number;

    @Exclude()
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
    @Column()
    avatar: string;
    @Column()
    start_time: number;
    @Column()
    end_time: number;
    @Column()
    cover_image_url: string;
    @Column()
    distance: number;

    @Expose({ name: 'avatar_url'})
    getAvatarUrl(): string | null {
        return this.avatar ? `${process.env.APP_API_URL}/files/uploads/${this.avatar}`
        : null;
    }

    @Expose({ name: 'background_image_url'})
    getImageUrl(): string | null {
        return this.cover_image_url ? `${process.env.APP_API_URL}/files/restaurants/${this.cover_image_url}`
        : null;
    }

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}