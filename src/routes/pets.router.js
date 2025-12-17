import { Router } from "express";
import PetModel from "../models/Pet.model.js";

const router = Router();

router.get("/", async (req, res) => {
  const pets = await PetModel.find();
  res.json({ status: "success", payload: pets });
});

export default router;
