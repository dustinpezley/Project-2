const Act = require('./Act');
const Employee = require('./Employee');
const Sales = require('./Sales');
const User = require('./User');
const Venue = require('./Venue');
const Act = require('./Act');
const Sales = require('./Sales');
const { MODULEDECLARATION_TYPES } = require('@babel/types');

Venue.hasMany(Act, {
    foreignKey: 'venue_id'
});

Act.belongsTo(Venue, {
    foreignKey: 'venue_id'
});

Act.hasMany(Sales, {
    foreignKey: 'act_id'
});

Sales.belongsTo(Act, {
    foreignKey: 'act_id'
});

Venue.hasMany(Sales, {
    foreignKey: 'venue_id'
});

Sales.belongsTo(Venue, {
    foreignKey: 'venue_id'
});

module.exports = { User, Venue, Act, Sales };


