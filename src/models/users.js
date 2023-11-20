import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  favoriteDance: {
    type: String,
  },
});

export const User = mongoose.model("users", UserSchema);
