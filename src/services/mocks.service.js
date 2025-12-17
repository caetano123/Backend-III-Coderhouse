import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

/* ---------------- USERS ---------------- */
export const generateMockUsers = (quantity = 1) => {
  const users = [];

  for (let i = 0; i < quantity; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 80 }),
      password: bcrypt.hashSync("coder123", 10),
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: []
    });
  }

  return users;
};

/* ---------------- PETS ---------------- */
export const generateMockPets = (quantity = 1) => {
  const pets = [];

  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.word.noun(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 })
    });
  }

  return pets;
};
