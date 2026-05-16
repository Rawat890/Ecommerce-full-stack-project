import express from "express"
import { getProductByCategoryId } from "../controllers/product.controller";
const router = express.Router();

router.get("/:categoryId", getProductByCategoryId);

export default router;