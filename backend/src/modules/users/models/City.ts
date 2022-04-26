import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity('estados')
export class State{
    @PrimaryColumn()
    id: string;
    @Column()
    nome: string;
    @Column()
    sigla: string;    
}

@Entity('cidades')
export class City{
    @PrimaryColumn()
    id: string;
    @Column()
    nome: string;
    @Column()
    codigo_ibge: number;
    @Column()
    estado_id: number;

    @ManyToOne(() => State)
    @JoinColumn({name: 'estado_id'})
    state: State;

    @Column()
    densidade_demo: number;
    @Column()
    gentilico: string;
    @Column()
    area: number;
}