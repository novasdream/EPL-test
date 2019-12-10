import { ConnectionOptions } from 'typeorm';
 
const ORMConfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: Number(33006),
  username: 'user',
  password: 'password',
  database: 'football',
  entities: [
    __dirname + '/src/entities/*.entity{.ts,.js}',
  ],
  migrationsTableName: "migrations",
  migrations: ["migrations/*.ts"],
  cli: {
      migrationsDir: "migration"
  },
  synchronize: true,
};
 
export = ORMConfig;