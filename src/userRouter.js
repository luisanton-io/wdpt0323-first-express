import express from "express";
import { User } from "./models/users.js";

const userRouter = express.Router();

userRouter.get("/test", async (req, res) => {
  res.json({ message: "Users router working!" });
});

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send();
  }

  res.json(user);
});

userRouter.post("/", async (req, res) => {
  const newUser = new User(req.body);

  await newUser.save();

  res.status(201).send(newUser);
});

export default userRouter;
