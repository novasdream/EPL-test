import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueController } from './league/league.controller';
import { League } from './entities/league.entity';
import { Team } from './entities/team.entity';
import { Round } from './entities/round.entity';
import { Match } from './entities/match.entity';
import { LeagueModule } from './league/league.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33006,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [League, Match, Round, Team],
      synchronize: true,
    }),
    LeagueModule
  ],
})
export class AppModule {}
