const express = require ("express");
const router = express.Router();
const commentController = require("../controllers/commentController")

router.route("/").post(commentController.create)
router.route("/").get(commentController.getAll)

router
.route("/id")
.get(commentController.getOne)
.put(commentController.edit)
.delete(commentController.delete)

module.exports = router