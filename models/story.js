"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(homnepage),
        {
          through: "homepage",
          foreignKey: "homepageId",
        };
    }
  }
  story.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      homepageId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
