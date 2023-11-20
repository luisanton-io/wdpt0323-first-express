import express from "express";
import apiRouter from "./apiRouter.js";
import mongoose from "mongoose";

const server = express();

const port = 3030;

server.use("/api", apiRouter);

mongoose
  .connect(
    "mongodb+srv://cetesi3456:U97LeWCPeynUejx@epicode-wdpt0323.7cj4hoj.mongodb.net/epicode"
  )
  .then(() => {
    server.listen(port, () => {
      console.log("🚀 Server listening to port: " + port);
    });
  })
  .catch(() => {
    console.log("Errore nella connessione al DB");
  });
