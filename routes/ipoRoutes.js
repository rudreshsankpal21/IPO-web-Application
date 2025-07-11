const express = require("express");
const router = express.Router();
const { getAllIPOs } = require("../controllers/ipoController");

router.get("/", getAllIPOs);

module.exports = router;
