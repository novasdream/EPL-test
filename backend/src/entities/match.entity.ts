import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Round } from './round.entity';
import { Team } from './team.entity';

@Entity()
export class Match {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date: Date;
    
    @Column()
    roundId: number;

    @ManyToOne(type => Round, round => round.matchs)
    round?: Round;

    @ManyToOne(type => Team, team => team.matchs_has_team1, { cascade : true,  eager: true  })
    team1: Team;

    @ManyToOne(type => Team, team => team.matchs_has_team2, { cascade : true,  eager: true  })
    team2: Team;

    @Column()
    score1: number;

    @Column()
    score2: number;

    goalsFrom(team: Team) {
        return this.team1.key == team.key ? this.score1 : this.team2.key == team.key ? this.score2 : 0
    }

    goalsNotFrom(team: Team) {
        return this.team1.key != team.key ? this.score1 : this.team2.key != team.key ? this.score2 : 0
    }

    checkWin(team: Team) {
        return this.goalsFrom(team) > this.goalsNotFrom(team)
    }
    
    checkDraw(team: Team) {
        return this.goalsFrom(team) == this.goalsNotFrom(team)
    }
    
    checkLoss(team: Team) {
        return this.goalsFrom(team) < this.goalsNotFrom(team)
    }

    static create(match : { roundId : number, id : number, date : Date, score1 : number, score2  : number, team1 : Team, team2 : Team}) {
        const _match = new Match();
        _match.id       = match.id;
        _match.roundId  = match.roundId;
        _match.score1   = match.score1;
        _match.score2   = match.score2;
        _match.team1    = match.team1;
        _match.team2    = match.team2;
        return _match
    }
}