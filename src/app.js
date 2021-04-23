import express from "express";
import products from "./routes/products.routes"
import "./database"
import morgan from 'morgan';
import {createRoles,createAdmin} from './libs/initialSetup'

import productRoutes from "./routes/products.routes";
import usersRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const app = express() 

createRoles()
createAdmin();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) =>{
    res.json({
        author: "dkasjkdjs",
        proyecto: "dlskalkd",
        version: "1.2"
    })
})

app.use("/products",products)


app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);


export default app;
