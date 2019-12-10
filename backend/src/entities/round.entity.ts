import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { League } from './league.entity';
import { Match } from './match.entity';

@Entity()
export class Round {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @ManyToOne(type => League, league => league.rounds)
    league: League;

    @OneToMany(type => Match, match => match.round, { cascade : true,  eager: true  })
    matchs: Match[];
}