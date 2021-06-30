import { user } from "./user";

export const resolvers = {
  Query: {
    user: () => user.find(),
  },
  Mutation: {
    create_user: async (parent, args, context, info) => {
      const usrObj = new user(args);
      await usrObj.save();
      return usrObj;
    },
  },
};
