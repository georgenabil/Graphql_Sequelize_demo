import Chef from "./Chef";
import Resturant from "./Resturant";
import * as Mutation from "./Mutation/index";
import * as Query from "./Query";

//console.log(Mutation);

const resolvers = {
  Chef,
  Resturant,
  Mutation,
  Query,
};

export default resolvers;
