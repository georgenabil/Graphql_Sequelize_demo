import * as express from "express";
import * as cors from "cors";
import accessEnv from "#root/helpers/accessEnv";
import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import { ApolloServer } from "apollo-server-express";
const Port = accessEnv("PORT", 7000);

const apolloserver = new ApolloServer({ resolvers, typeDefs });

const app = express();
app.use(cors());

apolloserver.applyMiddleware({ app, path: "/graphql" });

app.listen(Port, "0.0.0.0", () => {
  console.log("the server is running");
});
