const router = require("express").Router();
const userController = require("../controllers/userController.js");

router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUser);

module.exports = router;
