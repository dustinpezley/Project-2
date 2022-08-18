const router = require("express").Router();

const employeeRoutes = require("./employee-routes");
const userRoutes = require("./user-routes");
const showRoutes = require("./shows-routes");
const roleRoutes = require("./role-routes");

router.use("/users", userRoutes);
router.use("/employees", employeeRoutes);
router.use("/shows", showRoutes);
router.use("/role", roleRoutes);

module.exports = router;
