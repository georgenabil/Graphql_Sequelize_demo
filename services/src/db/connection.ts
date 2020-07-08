import { Sequelize, ConnectionError } from "sequelize";

import accessEnv from "#root/helpers/accessEnv";
import { Resturant, Chef } from "#root/db/models";
import { chefs } from "#root/graphql/resolvers/Query";

const DB_URL = accessEnv("DB_URL");

console.log("that mother fucito", DB_URL);

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8",
    //multipleStatement: true,
  },
  logging: false,
});

Resturant.connection(sequelize);
Chef.connection(sequelize);

Chef.hasMany(Resturant);
Resturant.belongsTo(Chef);

export default sequelize;
