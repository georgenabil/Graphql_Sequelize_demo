import { Resturant } from "#root/db/models";

const createResturantResolver = (
  context: any,
  { chefid, name }: { chefid: string; name: string }
) => {
  console.log(context);
  return Resturant.create({ chefid, name });
};

export default createResturantResolver;
