import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { League } from './../entities/league.entity';
import { Team } from './../entities/team.entity';
import { Round } from './../entities/round.entity';
import { Match } from './../entities/match.entity';
import { TeamRepository } from './..//repository/team.repository';
import { RoundRepository } from './..//repository/round.repository';
import { MatchRepository } from './..//repository/match.repository';
import { LeagueRepository } from './..//repository/league.repository';

@Injectable()
export class LeagueService {
    constructor(
        @InjectRepository(Team)     private readonly teamRepository     : TeamRepository,
        @InjectRepository(Round)    private readonly roundRepository    : RoundRepository,
        @InjectRepository(Match)    private readonly matchRepository    : MatchRepository,
        @InjectRepository(League)   private readonly leagueRepository   : LeagueRepository,
      ) {}

      async getTeamsWithMetric() {
        const team_games = await this.teamRepository.find({relations: ['matchs_has_team1', 'matchs_has_team2']});
        return team_games.map(team => team.getTotalMetrics())
      }

}
