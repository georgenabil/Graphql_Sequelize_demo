import { Chef, Resturant } from "#root/db/models";

const chefsResolver = async () => {
  // const ALLChefs = await Chef.findAll({
  //   include: Resturant,
  // });
  // console.log(ALLChefs);

  /*return [
    {
      ...ALLChefs[0].get(),
      Restaurants: [ALLChefs[0].get().Resturants[0].get()],
    },
  ];*/

  // return Chef.findAll({ include: Resturant });
  return Chef.findAll();
};

export default chefsResolver;
