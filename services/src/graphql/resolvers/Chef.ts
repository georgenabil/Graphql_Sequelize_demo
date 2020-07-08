import { Chef, Resturant } from "#root/db/models";
import { Where } from "sequelize/types/lib/utils";
import { where } from "sequelize/types";

const resolver = {
  Resturants: (chef: Chef) => {
    const id: any = chef.get("id");
    return Resturant.findAll({
      where: {
        chefid: id,
      },
    });
  },
};

export default resolver;
