const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Act extends Model {}
 Act.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         title: {
             type: DataTypes.STRING,
             allowNull: false
         },
         venue_id: {
             type: DataTypes.INTEGER,
             references: {
                 model: 'venue',
                 key: 'id'
             }
         }

     },
     {
         sequelize,
         freezeTableName: true,
         underscored: true,
         modelName: 'act'
     }
 )

module.exports = Act;
