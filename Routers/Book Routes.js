const express = require ("express");
const router = express.Router();
const BookController = require("../controllers/BookController")
const multer = require("multer");
const {upload} = require("../utils/multer")
const userController = require("../controllers/userControllers")

router.route("/")
.post(upload.single("image"), BookController.create)
.get(BookController.getAll)

router.route("/:search").get(BookController.search)

router
.route("/:id")
.put(upload.single("image") , BookController.edit)
.delete(userController.protect2,BookController.delete)

module.exports = router