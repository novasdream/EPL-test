import { Module } from '@nestjs/common';
import { LeagueController } from './league.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './../entities/league.entity';
import { Match } from './../entities/match.entity';
import { Round } from './../entities/round.entity';
import { Team } from './../entities/team.entity';
import { LeagueService } from './league.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        League,
        Team,
        Round,
        Match
      ])
  ],
  exports: [TypeOrmModule],
  providers: [LeagueService],
  controllers: [LeagueController],
})
export class LeagueModule {}
