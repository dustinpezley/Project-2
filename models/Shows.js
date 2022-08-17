const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shows extends Model {}

Shows.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    talent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'talent',
        key: 'id',
      },
    },
    performance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    performance_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    paranoid: true,
    modelName: 'shows',
  }
);

module.exports = Shows;
