const express = require("express");
const router = express.Router();
const { getAllPages, getPage, createPage } = require("../controller");

router.get("/", getAllPages);
router.get("/:id", getPage);
router.post("/", createPage);

module.exports = router;
