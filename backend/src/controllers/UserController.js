const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const User = require("../model/User");

const beapistart = "http://localhost:5001";

const feapistart = "http://localhost:5173";

const getallusers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");

    res
      .status(200)
      .json({ success: true, message: "all users fetched", data: users });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const getmyuser = async (req, res) => {
  const id = req.user.id;

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(`New user:
    Email: ${email},
    username:${username},
    password:${password},
    `);

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
      expiresIn: "24h",
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
      expiresIn: "24h",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const sendverifyemail = async (req, res) => {
  console.log("Sending");

  const id = req.user.id;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const verifytoken = jwt.sign(
      { id: user._id, role: user.role },
      "emailverify",
      {
        expiresIn: "24h",
      }
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "zakary.sawayn78@ethereal.email",
        pass: "qxVy48M8FjvqU6ABD9",
      },
    });

    const mailOptions = {
      from: "zakary.sawayn78@ethereal.email",
      to: user.email,
      subject: "Email Verification for Recipe",
      text: `Step-1 of you recipe building experience is to get verified. Click below: 
      ${feapistart}/verify-email?token=${verifytoken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });

    res.json({ success: true, message: "Verification sent", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const verifyemail = async (req, res) => {
  console.log("VERIFYING");
  const { token } = req.query;

  if (!token) {
    return res.status(400).send("Verification token is missing");
  }

  try {
    const decoded = jwt.verify(token, "emailverify");
    const id = decoded.id;

    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).send("User not found");
    }

    if (user.isVerified) {
      return res.status(400).send("User already verified");
    }

    user.isVerified = true;

    await user.save();

    res.status(200).send("Email verified successfully");
  } catch (error) {
    res.status(400).send("Invalid or expired token");
  }
};

//edit user
const editUser = async (req, res) => {
  const { username, bio, photo } = req.body;
  const userId = req.user.id;

  try {
    // Find the user by ID and update their profile
    const user = await User.findByIdAndUpdate(
      userId,
      { username, bio, photo },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
const aeditUser = async (req, res) => {
  const { username, bio, photo, changeId } = req.body;
  const userId = req.user.id;

  const admin = await User.findById(userId);

  if (admin.role != "admin") {
    return res.status(404).json({ message: "You are not authorized" });
  }

  try {
    // Find the user by ID and update their profile
    const user = await User.findByIdAndUpdate(
      changeId,
      { username, bio, photo },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  getallusers,
  getUser,
  getmyuser,
  createUser,
  loginUser,
  sendverifyemail,
  editUser,
  deleteUser,
  verifyemail,
  aeditUser,
};
