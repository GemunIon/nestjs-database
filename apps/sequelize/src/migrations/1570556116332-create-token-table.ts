import { MigrationFn } from "umzug";
import { Sequelize, DataTypes } from "sequelize";

import { ns } from "../common/constants";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable(
    "token",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
      },
      code: DataTypes.STRING,
      type: DataTypes.ENUM({
        values: ["EMAIL", "PASSWORD"],
      }),
      user_id: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    },
    {
      // @ts-ignore
      schema: ns,
    },
  );
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("user");
};
