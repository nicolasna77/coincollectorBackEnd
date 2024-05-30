const { faker } = require("@faker-js/faker");

const generateFakeCoins = (num = 10) => {
  const coins = [];

  for (let i = 0; i < num; i++) {
    coins.push({
      id: faker.datatype.number(),
      name: faker.finance.currencyName(),
      country: faker.address.country(),
      year: faker.date.past().getFullYear(),
      value: faker.finance.amount(),
      description: faker.lorem.sentence(),
    });
  }

  return coins;
};

module.exports = generateFakeCoins;
