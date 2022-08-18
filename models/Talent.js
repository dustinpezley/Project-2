const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
<<<<<<< HEAD
      onDelete: 'CASCADE',
=======
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "venue",
        key: "id",
      },
>>>>>>> feature/routes-index
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'talent',
=======
    modelName: "talent",
>>>>>>> feature/routes-index
  }
);

module.exports = Talent;
