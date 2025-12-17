import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true
  },
  age: Number,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"]
  },
  pets: {
    type: Array,
    default: []
  }
});

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
