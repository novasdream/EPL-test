import { Team } from "./../entities/team.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> { }