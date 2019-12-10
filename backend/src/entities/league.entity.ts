import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Round } from './round.entity';

@Entity()
export class League {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(type => Round, round => round.league, { cascade : true,  eager: true  } )
    rounds: Round[];
    
}