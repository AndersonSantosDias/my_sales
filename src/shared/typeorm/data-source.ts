import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "87240893",
    database: "mysales",
    entities: ['./src/modules/**/database/entities/*.{ts, js}'],
    migrations: ['./src/shared/typeorm/migrations/*.{ts, js}'],

})