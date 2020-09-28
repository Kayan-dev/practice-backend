"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          homepageId: 1,
          name: "Testing story name",
          content: "Content mock-up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homepageId: 2,
          name: "Number 3",
          content: "Content mock-up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homepageId: 1,
          name: "Also something here",
          content: "eyooo mock-up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homepageId: 1,
          name: "Whats up bitchesssss story name",
          content: "That's nice honey,",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
