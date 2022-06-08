const Router = require("express");

const roleController = require("../controllers/RoleController");

const router = Router();

router.post("/", roleController.createRole);
// router.get('/', login, authorizationCheck,roleController.getRoles)
// router.get('/',authentication, roleController.getRoles)
router.get("/", roleController.getRoles);
router.delete("/:id", roleController.deleteRole);
router.put("/:id", roleController.updateRole);

module.exports = router;
