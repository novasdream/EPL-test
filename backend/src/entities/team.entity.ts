import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Match } from './match.entity';
import { TeamMetricsInterface } from 'src/league/interfaces/team-metrics.interface';

@Entity()
export class Team {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    key: string;
    
    @Column()
    code: string;
    
    @OneToMany(type => Match, match => match.team1)
    matchs_has_team1: Match[];
    @OneToMany(type => Match, match => match.team2)
    matchs_has_team2: Match[];
    

    getTotalMetrics() : TeamMetricsInterface {
        return {
            key          : this.key,
            name         : this.name,
            code         : this.code,
            win_count    : this.getWinMatchs().length,
            draw_count   : this.getDrawMatchs().length,
            losses_count : this.getLossMatchs().length,
            goals_for    : this.getGoals(),
            goals_against: this.getGoalsAgainst(),
            goals_diff   : this.getGoalsDiff(),
            total_points : this.getWinMatchs().length * 3 + this.getDrawMatchs().length,
        }
    }

    private getGoals() {
        return this.getMatchs().reduce((a, b) => a + b.goalsFrom(this), 0)
    }

    private getGoalsAgainst() {
        return this.getMatchs().reduce((a, b) => a + b.goalsNotFrom(this), 0)
    }

    private getGoalsDiff() {
        return this.getGoals() - this.getGoalsAgainst()
    }

    private getMatchs() {
        return [ ...this.matchs_has_team1, ...this.matchs_has_team2]
    }

    private getWinMatchs() {
        return this.getMatchs().map(match => match).filter( match => match.checkWin(this) )
    }
    
    private getLossMatchs() {
        return this.getMatchs().map(match => match).filter( match => match.checkLoss(this) )
    }
    
    private getDrawMatchs() {
        return this.getMatchs().map(match => match).filter( match => match.checkDraw(this) )
    }


    static create(team : { id: number, key : string, name : string, code: string, matchs_has_team1: [], matchs_has_team2: [] }) {
        const _team = new Team();
        _team.id                = team.id;
        _team.key               = team.key;
        _team.name              = team.name;
        _team.code              = team.code;
        _team.matchs_has_team1  = team.matchs_has_team1;
        _team.matchs_has_team2  = team.matchs_has_team2;
        return _team;
    }
}