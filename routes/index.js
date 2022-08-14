const Employee = require("./Employee");
const Role = require("./Role");
const Sales = require("./Sales");
const Talent = require("./Talent");
const User = require("./User");
const Venue = require("./Venue");

// create associations between models
Employee.hasMany(Role, {
  foreignKey,
});
