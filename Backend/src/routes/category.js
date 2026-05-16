import express from 'express'
import { getAllCategories } from '../controllers/category.controller';

const router = express.Router();

router.get("/", getAllCategories);  //getAllCategories is controller function

export default router;