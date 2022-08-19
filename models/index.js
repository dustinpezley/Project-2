const Sales = require('./Sales');
const User = require('./User');
const Venue = require('./Venue');
const Talent = require('./Talent');
const Employee = require('./Employee');
const Role = require('./Role');
const Shows = require('./Shows');
// const { MODULEDECLARATION_TYPES } = require('@babel/types');

Venue.hasMany(Shows, {
  foreignKey: 'venue_id',
});

Shows.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Talent.hasMany(Shows, {
  foreignKey: 'talent_id',
});

Shows.belongsTo(Talent, {
  foreignKey: 'talent_id',
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

Venue.hasMany(Employee, {
  foreignKey: 'primary_venue',
});

Employee.belongsTo(Venue, {
  foreignKey: 'primary_venue',
});

User.hasOne(Employee, {
  foreignKey: 'employee_id',
});

Employee.belongsTo(User, {
  foreignKey: 'employee_id',
});

module.exports = { User, Venue, Talent, Sales, Role, Employee, Shows };
