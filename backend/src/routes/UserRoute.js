const express = require("express");
const router = express.Router();

const {
  getallusers,
  getUser,
  getmyuser,
  createUser,
  loginUser,
  editUser,
  deleteUser,
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

// delete

router.post("/delete", verifyToken, deleteUser);

module.exports = router;
