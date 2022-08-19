const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sales extends Model {}

Sales.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    talent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'talent',
        key: 'id',
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'venue',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sales',
  }
);

module.exports = Sales;
