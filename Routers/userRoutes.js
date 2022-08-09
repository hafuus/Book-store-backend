const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();

// router.route("/allusers").get(userController.getUsers);

router.route("/login").post(userController.logIn);
router.route("/signup").post(userController.signUp);
// router.route("/get/:id").get(userController.getUser);

router
  .route("/:id")
  .get(userController.getUsers)
  .put(userController.changePassword)
  // .put(userController.changeName)
  // .delete(userController.deleteUser);

module.exports = router;

// "vim.startInInsertMode": true