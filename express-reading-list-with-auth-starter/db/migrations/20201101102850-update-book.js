"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Book", "userId", {
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      type: Sequelize.INTEGER,
    });
  },
  down: (queryInterface, Sequelize) => {},
};
