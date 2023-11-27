import { Product } from "./models/products.js";
import express from "express";

const productRouter = express.Router();

productRouter
  .get("/", async (req, res, next) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(!deletedProduct ? 404 : 200).send();
    } catch (error) {
      next(error);
    }
  });

export default productRouter;
