import { Chef } from "#root/db/models";

const createChef = (context: any, { name }: { name: string }) => {
  console.log(context);
  return Chef.create({ name });
};

export default createChef;
