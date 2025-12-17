import { Router } from "express";
import {
  generateMockUsers,
  generateMockPets
} from "../services/mocks.service.js";
import UserModel from "../models/User.model.js";
import PetModel from "../models/Pet.model.js";

const router = Router();

/* ---------------- MOCKING PETS (migrado) ---------------- */
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100);
  res.json({ status: "success", payload: pets });
});

/* ---------------- MOCKING USERS ---------------- */
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: "success", payload: users });
});

/* ---------------- GENERATE DATA ---------------- */
router.post("/generateData", async (req, res) => {
  let { users = 0, pets = 0 } = req.body;

  // 1️⃣ Convertir a número
  users = Number(users);
  pets = Number(pets);

  // 2️⃣ Validar
  if (
    !Number.isInteger(users) ||
    !Number.isInteger(pets) ||
    users < 0 ||
    pets < 0
  ) {
    return res.status(400).json({
      status: "error",
      message: "users y pets deben ser números enteros positivos"
    });
  }

  // (opcional) límite razonable
  if (users > 100 || pets > 100) {
    return res.status(400).json({
      status: "error",
      message: "El máximo permitido es 100 users y 100 pets"
    });
  }

  // 3️⃣ Generar
  const mockUsers = generateMockUsers(users);
  const mockPets = generateMockPets(pets);

  // 4️⃣ Guardar
  await UserModel.insertMany(mockUsers);
  await PetModel.insertMany(mockPets);

  // 5️⃣ Responder con lo REAL
  res.status(201).json({
    status: "success",
    insertedUsers: mockUsers.length,
    insertedPets: mockPets.length
  });
});

export default router;
