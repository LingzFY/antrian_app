/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initDatabase = (sequelize, Types) => {
  class ExampleModel extends Model {}
  ExampleModel.init(
    {
      uuid: Types.STRING,

      string: Types.STRING,
      date: Types.DATE,
      text: Types.TEXT,

      created_at: Types.TEXT,
      updated_at: Types.TEXT,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "ExampleModel",
      tableName: "tbl_example_model",
    }
  );
  return ExampleModel;
};

export default initDatabase(connection, DataTypes);
