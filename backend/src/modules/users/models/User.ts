import { Exclude, Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 } from 'uuid';
import { RestaurantRepository } from '../../restaurants/repositories/RestaurantRespository';
import { City } from './City';

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
    city_id: number;

    @OneToOne(() => City)
    @JoinColumn({name: 'city_id'})
    city: City;

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

    @Expose({ name: 'avatar_url'})
    getAvatarUrl(): string | null {
        return this.avatar ? `${process.env.APP_API_URL}/files/uploads/${this.avatar}`
        : null;
    }

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}