const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Talent extends Model {}
Talent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'act',
  }
);

module.exports = Talent;
