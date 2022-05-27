import  {DataSource} from 'typeorm';

import config from "../lib/config";
import { User } from './models/User';
import { Role } from './models/Role';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.dbHost,
    port: 5432,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    entities: [User, Role],
    synchronize: false
})