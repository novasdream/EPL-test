import { Controller, Get, Res, Render } from '@nestjs/common';
import { LeagueService } from './league.service';
import { League } from './../entities/league.entity';
import { Round } from './../entities/round.entity';
import { Match } from './../entities/match.entity';
import { Team } from './../entities/team.entity';
import sorts from './../common/sorts/goals.sort'
import { pipe } from 'rxjs';

@Controller('league')
export class LeagueController {
    constructor(private readonly leagueService: LeagueService) {}
    
    @Get('16-17/result')
    async listAll() {
      const jogos = await this.leagueService.getTeamsWithMetric();
      return jogos
        .sort(sorts.sortByGoals)
        .sort(sorts.sortByDifference)
        .sort(sorts.sortByTotalPoints)
        .map((game, idx)  => {
        return { ...game, position: idx + 1 }
      });
    }
}
