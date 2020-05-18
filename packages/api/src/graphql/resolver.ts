function hello() {
  return 'Hello visitor';
}

export const resolvers = {
  Query: {
    hello,
  },
};
