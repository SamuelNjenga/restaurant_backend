const Router = require("express");

const tableRegistrationController = require("../controllers/TableRegistrationController");

const router = Router();

router.post("/", tableRegistrationController.tableRegistration);
router.get("/", tableRegistrationController.getTables);
router.delete("/:id", tableRegistrationController.deleteTable);
router.put("/:id", tableRegistrationController.updateTableInformation);

module.exports = router;
