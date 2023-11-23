import express from "express";
import { User } from "./models/users.js";
import { checkAuth } from "./middlewares/checkAuth.js";
import { genericError } from "./middlewares/genericError.js";

const userRouter = express.Router();

// userRouter.use(checkAuth);

userRouter.get("/test", async (req, res) => {
  res.json({ message: "Users router working! 🚀" });
});

userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send();
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", checkAuth, async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

userRouter.put("/:id", checkAuth, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/:id", checkAuth, async (req, res, next) => {
  try {
    const deletedDocument = await User.findByIdAndDelete(req.params.id);

    if (!deletedDocument) {
      // Questa risorsa non è esistente e quindi non si può cancellare
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
});

export default userRouter;
