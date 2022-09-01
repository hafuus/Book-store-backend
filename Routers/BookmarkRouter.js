const express = require ("express");
const router = express.Router();
const BookMarkController = require("../controllers/BookmarkController")

router.route("/").post(BookMarkController.create)
router.route("/").get(BookMarkController.getAll)

router
.route("/id")
// .get(BookMarkController.getOne)
// .post(BookMarkController.create)
.put(BookMarkController.edit)
.delete(BookMarkController.delete)

module.exports = router