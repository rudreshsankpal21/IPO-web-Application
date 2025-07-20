const express = require("express");
const router = express.Router();
const {
  getAllIPOs,
  addIPO,
  updateIPO,
  deleteIPO,
  getIPO,
} = require("../controllers/ipoController");
const authMiddleware = require("../middlewares/authMiddleware");

// protected all routes
router.use(authMiddleware);

// get all ipos
router.get("/", getAllIPOs);

// get a single ipo
router.get("/:id", getIPO);

// add new ipo
router.post("/", addIPO);

// update ipo
router.put("/:id", updateIPO);

// delete ipo
router.delete("/:id", deleteIPO);

module.exports = router;
