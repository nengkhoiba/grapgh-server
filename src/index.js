import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./models/typeDefs";
import { resolvers } from "./models/resolvers";

const app = express();
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server.applyMiddleware({ app });
  await mongoose.connect(`mongodb://root:admin123@mongodb:27017/graphql`, {
    useNewUrlParser: true,
  });
  app.listen({ port: 4000 }, () => {
    console.log("Graphql server running");
  });
};

startServer();
