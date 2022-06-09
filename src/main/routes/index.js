const Router = require("express");

const RoleRoutes = require("./RoleRoutes");
const TableRegistrationRoutes = require("./TableRegistrationRoutes");

const router = Router();

router.use("/roles", RoleRoutes);
router.use("/tables", TableRegistrationRoutes);

module.exports = router;
