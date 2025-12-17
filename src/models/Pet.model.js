import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number
});

const PetModel = mongoose.model("pets", petSchema);
export default PetModel;
