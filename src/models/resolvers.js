import { Cat } from "./Cat";
import mongoose from "mongoose";
import schemaKeys from "./schemaKeys.json";

export const resolvers = {
  Query: {
    user: () => Cat.find(),
    cat: () => Cat.find(),
  },
  Mutation: {
    create_user: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    create_cat: async (_, { name, entity }) => {
      const schema = schemaKeys.filter((row) => row.entity == entity);
      console.log(schema);
      const mongooseSchema = mongoose.model(
        schema.entity,
        schema.schema.map((row) => {
          return `${row.key}:${row.type.name}`;
        })
      );
      const obj = new mongooseSchema({ name });
      await obj.save();
      return obj;
    },
  },
};
