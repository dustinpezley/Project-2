const Sales = require('./Sales');
const User = require('./User');
const Venue = require('./Venue');
const Talent = require('./Talent');
const Employee = require('./Employee');
const Role = require('./Role');
// const { MODULEDECLARATION_TYPES } = require('@babel/types');

Venue.hasMany(Talent, {
  foreignKey: 'venue_id',
});

Talent.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Talent.hasMany(Sales, {
  foreignKey: 'talent_id',
});

Sales.belongsTo(Talent, {
  foreignKey: 'talent_id',
});

Venue.hasMany(Sales, {
  foreignKey: 'venue_id',
});

Sales.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Employee.belongsTo(Role, {
  foreignKey: 'role_id',
});

Role.hasMany(Employee, {
  foreignKey: 'role_id',
});

Venue.hasMany(Role, {
  foreignKey: 'primary_venue',
});

Role.belongsTo(Venue, {
  foreignKey: 'primary_venue',
});

module.exports = { User, Venue, Talent, Sales, Role, Employee };
