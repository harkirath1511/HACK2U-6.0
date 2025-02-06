import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./src/routes/authRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000

const app = express();
app.use(express.json());

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

app.use('/api/login',router)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err))