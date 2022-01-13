'use strict';

const Food = (sequelize, DataTypes) => {
  sequelize.define('Food', {
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = Food;