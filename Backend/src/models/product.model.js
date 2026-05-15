import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
 name: { type: String, required: true },
 image_url: { type: String, required:true },
 description: { type: String },
 ar_url: { type: String },
 price: { type: Number, required: true },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now },
 category:[{type: mongoose.Schema.Types.ObjectId, ref: "Category"}]
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;