import express from "express";
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());

//GET /user/get-data - importing the routes
app.use('/user', userRoutes)

export default app;