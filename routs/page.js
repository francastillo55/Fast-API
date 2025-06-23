const express = require("express");
const router = express.Router();
const { page } = require("../controller");

router.get("/", page);

module.exports = router;
