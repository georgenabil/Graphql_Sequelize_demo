import { Sequelize, Model, DataTypes } from "sequelize";
import { type } from "os";

interface connection {
  connect: (sequelize: Sequelize) => Model;
}

export class Chef extends Model {
  public static connection(sequelize: Sequelize) {
    return Chef.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },

        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },

      { sequelize, modelName: "Chef" }
    );
  }
}
export class Resturant extends Model {
  public static connection(sequelize: Sequelize) {
    return Resturant.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },

        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },

        chefid: {
          allowNull: false,
          type: DataTypes.INTEGER.UNSIGNED,
          references: {
            key: "id",
            model: "Chef",
          },
        },
      },
      { sequelize, modelName: "Resturant" }
    );
  }
}
