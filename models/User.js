import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // You can add more fields like email, name, etc., as per your requirements
});

const User = mongoose.model("Auth", userSchema);

export default User;
