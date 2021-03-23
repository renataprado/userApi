const express = require ('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get("/", userController.index);
router.get("/:userId", userController.findById);
router.delete("/:userId", userController.delete);
router.put("/:userId", userController.update);

module.exports = router;