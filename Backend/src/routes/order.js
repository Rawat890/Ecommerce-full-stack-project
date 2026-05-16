import express from 'express';
import { createOrder, createTransaction, getOrdersByUserId } from '../controllers/order.controller.js';

const router = express.Router();

router.post("/transaction", createTransaction);
router.post("/:userId", getOrdersByUserId);
router.post("/", createOrder);

export default router;