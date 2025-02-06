import express from "express";
import { loginWithMetaMask } from "../controllers/authController.js";

const router = express.Router();
router.post("/login", loginWithMetaMask);

export default router