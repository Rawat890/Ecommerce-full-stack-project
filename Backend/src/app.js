import express from "express";
import userRoutes from './routes/user.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';

const app = express();
app.use(express.json());

//GET /user/get-data - importing the routes
app.use('/user', userRoutes)
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

export default app;