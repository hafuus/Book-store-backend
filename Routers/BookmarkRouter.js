const express = require ("express");
const router = express.Router();
const BookMarkController = require("../controllers/BookmarkController")
const userController = require("../controllers/userControllers")


router.route("/").post(userController.protect,BookMarkController.create)
router.route("/").get( BookMarkController.getAll)

router.route("/:id").delete(BookMarkController.delete)

module.exports = router