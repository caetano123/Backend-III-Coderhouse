import { Router } from "express";
import UserModel from "../models/User.model.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.json({ status: "success", payload: users });
});

export default router;
