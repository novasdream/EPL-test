import { Match } from "./../entities/match.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Match)
export class MatchRepository extends Repository<Match> { }