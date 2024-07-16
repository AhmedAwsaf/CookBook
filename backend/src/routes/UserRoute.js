const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  getallusers,
  getUser,
  getmyuser,
  createUser,
  loginUser,
  editUser,
  aeditUser
} = require("../controllers/UserController");

const verifyToken = require("../controllers/middleware/authMiddleware");

// get
router.get("/all", getallusers);
router.get("/one/:id", getUser);

//authorization
router.get("/my", verifyToken, getmyuser);
router.post("/login", loginUser);

// create
router.post("/create", createUser);

// update
router.post("/update", verifyToken, editUser);

//adminonly
router.put("/aupdate", verifyToken, aeditUser);
// delete

module.exports = router;
