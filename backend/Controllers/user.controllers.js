import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { handleError } from "../helper/handleError.js";
import jwt from "jsonwebtoken";

export const handleCreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing fields!",
      });
    }

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(handleError(500, "Internal server error"));
  }
};

export const handleLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check if password is correct or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create Token
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      secret,
      { expiresIn: "1hr" },
    );

    // set cookie
    res.cookie("access-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 60 * 60 * 1000,
      path: "/",
    });

    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: newUser,
    });
  } catch (error) {
    next(handleError(500, "Internal server error"));
  }
};

export const handleLogout = (req, res, next) => {
  try {
    res.clearCookie("access-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    next(handleError(500, "Internal server error!"));
  }
};
