import { Chef, Resturant } from "#root/db/models";
const resolover = {
  chef: (Resturant: Resturant) => {
    const id: any = Resturant.get("chefid");
    return Chef.findByPk(id);
  },
};

export default resolover;
