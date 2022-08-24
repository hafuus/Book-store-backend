const express = require ("express");
const router = express.Router();
const BookController = require("../controllers/BookController")

router.route("/").post(BookController.create)
router.route("/").get(BookController.getAll)

router
.route("/id")
.get(BookController.getOne)
.put(BookController.edit)
.delete(BookController.delete)

module.exports = router