import  {DataSource} from 'typeorm';
import { User } from './models/User';

import config from "../lib/config";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.dbHost,
    port: 5432,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    entities: [User],
    synchronize: false
})