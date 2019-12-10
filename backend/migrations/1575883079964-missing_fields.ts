import {MigrationInterface, QueryRunner} from "typeorm";

export class missingFields1575883079964 implements MigrationInterface {
    name = 'missingFields1575883079964'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `match` ADD `score1` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD `score2` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP FOREIGN KEY `FK_1118562c3d9e68a7c7d680c7afd`", undefined);
        await queryRunner.query("ALTER TABLE `match` CHANGE `roundId` `roundId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD CONSTRAINT `FK_1118562c3d9e68a7c7d680c7afd` FOREIGN KEY (`roundId`) REFERENCES `round`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `match` DROP FOREIGN KEY `FK_1118562c3d9e68a7c7d680c7afd`", undefined);
        await queryRunner.query("ALTER TABLE `match` CHANGE `roundId` `roundId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD CONSTRAINT `FK_1118562c3d9e68a7c7d680c7afd` FOREIGN KEY (`roundId`, `roundId`) REFERENCES `round`(`id`,`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP COLUMN `score2`", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP COLUMN `score1`", undefined);
    }

}
