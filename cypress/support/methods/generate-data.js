const { faker } = require("@faker-js/faker");

export const generateFakeData = () => ({
  items: {
    name: faker.lorem.words(1),
  },
});
