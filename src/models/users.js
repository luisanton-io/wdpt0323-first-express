import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favoriteDance: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("users", UserSchema);
