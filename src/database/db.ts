/* eslint-disable spaced-comment */
import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT, //O "+" TRANSFORMA UMA STRING EM INT
  }
);
