import {MigrationInterface, QueryRunner} from "typeorm";

export class first1575877883401 implements MigrationInterface {
    name = 'first1575877883401'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `team` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `key` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `match` (`id` int NOT NULL AUTO_INCREMENT, `date` datetime NOT NULL, `roundId` int NULL, `team1Id` int NULL, `team2Id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `round` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leagueId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `league` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD CONSTRAINT `FK_1118562c3d9e68a7c7d680c7afd` FOREIGN KEY (`roundId`) REFERENCES `round`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD CONSTRAINT `FK_35deee50e58a815bec24d4876ef` FOREIGN KEY (`team1Id`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `match` ADD CONSTRAINT `FK_b74ce0e545c690e8f690f761115` FOREIGN KEY (`team2Id`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `round` ADD CONSTRAINT `FK_e60e2d58962a17b45197ec43890` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `round` DROP FOREIGN KEY `FK_e60e2d58962a17b45197ec43890`", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP FOREIGN KEY `FK_b74ce0e545c690e8f690f761115`", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP FOREIGN KEY `FK_35deee50e58a815bec24d4876ef`", undefined);
        await queryRunner.query("ALTER TABLE `match` DROP FOREIGN KEY `FK_1118562c3d9e68a7c7d680c7afd`", undefined);
        await queryRunner.query("DROP TABLE `league`", undefined);
        await queryRunner.query("DROP TABLE `round`", undefined);
        await queryRunner.query("DROP TABLE `match`", undefined);
        await queryRunner.query("DROP TABLE `team`", undefined);
    }

}
