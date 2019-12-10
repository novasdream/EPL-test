import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { LeagueService } from '../src/league/league.service';
import { LeagueController } from '../src/league/league.controller';
import { TeamMetricsInterface } from '../src/league/interfaces/team-metrics.interface';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Team } from '../src/entities/team.entity';
import { League } from '../src/entities/league.entity';
import { Round } from '../src/entities/round.entity';
import { Match } from '../src/entities/match.entity';

import { TeamRepository } from '../src/repository/team.repository';
import { LeagueRepository } from '../src/repository/league.repository';
import { RoundRepository } from '../src/repository/round.repository';
import { MatchRepository } from '../src/repository/match.repository';

describe('Calcs tests', () => {
  let team0          : Team;

  const result  : TeamMetricsInterface = {
    key: 'TEAM1',
    name: 'TEAM1',
    code: 'TEAM1',
    win_count: 5,
    draw_count: 1,
    losses_count: 0,
    goals_for: 10,
    goals_against: 0,
    goals_diff: 10,
    total_points: 16
  };

  beforeEach(async () => {
    const team1 = Team.create({
      id: 1, key : 'TEAM1', name : 'TEAM1', code: 'TEAM1', matchs_has_team1: [], matchs_has_team2: []
    })

    const team2 = Team.create({
      id: 2, key : 'TEAM2', name : 'TEAM2', code: 'TEAM2', matchs_has_team1: [], matchs_has_team2: []
    })

    const team3 = Team.create({
      id: 3, key : 'TEAM3', name : 'TEAM3', code: 'TEAM3', matchs_has_team1: [], matchs_has_team2: []
    })

    team0 = Team.create({
      id: 0, key : 'TEAM0', name : 'TEAM0', code: 'TEAM0', matchs_has_team1: [], matchs_has_team2: []
    })

    const match11 = Match.create({
      roundId : 0,
      id      : 1,     date    : new Date(),
      score1  : 1,     score2  : 2,
      team1   : team0, team2   : team1,
    })

    const match12 = Match.create({
      roundId : 1,
      id      : 2,     date    : new Date(),
      score1  : 2,     score2  : 0,
      team1   : team1, team2   : team0,
    })

    const match21 = Match.create({
      roundId : 1,
      id      : 2,     date    : new Date(),
      score1  : 3,     score2  : 2,
      team1   : team0, team2   : team2,
    })

    
    const match22 = Match.create({
      roundId : 1,
      id      : 2,     date    : new Date(),
      score1  : 2,     score2  : 1,
      team1   : team2, team2   : team0,
    })
    
    const match31 = Match.create({
      roundId : 1,
      id      : 2,     date    : new Date(),
      score1  : 2,     score2  : 1,
      team1   : team0, team2   : team3,
    })

    const match32 = Match.create({
      roundId : 1,
      id      : 2,     date    : new Date(),
      score1  : 0,     score2  : 0,
      team1   : team3, team2   : team0,
    })

    team0.matchs_has_team1.push(match11)
    team0.matchs_has_team1.push(match21)
    team0.matchs_has_team1.push(match31)
    team0.matchs_has_team2.push(match12)
    team0.matchs_has_team2.push(match22)
    team0.matchs_has_team2.push(match32)
  });

  describe('Total Metrics', () => {
    it('Win count must be 2', async () => {
      expect(team0.getTotalMetrics().win_count).toBe( 2 );
    });
    it('Total Points must be 7', async () => {
      expect(team0.getTotalMetrics().total_points).toBe( 7 );
    });
    it('Draw Count must be 1', async () => {
      expect(team0.getTotalMetrics().draw_count).toBe( 1 );
    });
    it('Losses count must be 3', async () => {
      expect(team0.getTotalMetrics().losses_count).toBe( 3 );
    });
    it('Goals for must be 7', async () => {
      expect(team0.getTotalMetrics().goals_for).toBe( 7 );
    });
    it('Goals Against must be 9', async () => {
      expect(team0.getTotalMetrics().goals_against).toBe( 9 );
    });
    it('Goals diff must be -2', async () => {
      expect(team0.getTotalMetrics().goals_diff).toBe( -2 );
    });
  });
});