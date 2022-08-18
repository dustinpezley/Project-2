const router = require("express").Router();
const sequelize = require("../config/connection");
const { Employee, Role, Sales, Talent, User, Venue } = require("../models");
