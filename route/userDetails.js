const express = require("express");
const {
  getUser,
  addUser,
  getById,
  deleteById,
  updateInfo,
} = require("../Controller/req");
const router = express.Router();

router.get("/", getUser);

router.post("/", addUser);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateInfo);

module.exports = router;
