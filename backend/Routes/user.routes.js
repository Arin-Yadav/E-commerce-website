import express from "express";
import {
  handleCreateUser,
  handleLogin,
  handleLogout,
} from "../Controllers/user.controllers.js";

const router = express.Router();

router.post("/signup", handleCreateUser);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

export default router;
