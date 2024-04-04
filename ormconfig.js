const dotenv = require('dotenv');
dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;
module.exports = {
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: ['src/**/*.entity{.ts,.js}'],
    seeds: ['src/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/seeding/factories/**/*{.ts,.js}'],
  }