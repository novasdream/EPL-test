import { League } from "./../entities/league.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(League)
export class LeagueRepository extends Repository<League> { }