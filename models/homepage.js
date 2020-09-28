"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class homepage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      homepage.belongsTo(models.user),
        {
          through: "user",
          foreignKey: "userId",
        },
        homepage.hasMany(models.story);
    }
  }
  homepage.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: { type: DataTypes.TEXT, allowNull: true },
      backgroundColor: { type: DataTypes.STRING, allowNull: false },

      color: { type: DataTypes.STRING, allowNull: false },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "homepage",
    }
  );
  return homepage;
};
