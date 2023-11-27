import mongoose, { Schema } from "mongoose";

// "name": "3310 edited live",
// "description": "brikkk",
// "brand": "Nokia",
// "imageUrl": "https://images.pexels.com/photos/33961/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
// "price": 70,

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Product = mongoose.model("products", ProductSchema);
