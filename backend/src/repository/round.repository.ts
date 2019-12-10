import { Round } from "./../entities/round.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Round)
export class RoundRepository extends Repository<Round> { }