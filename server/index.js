import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const DB = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD);

app.use(
    cors({
        origin: [process.env.ORIGIN],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true,
    })
)

app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
    .connect(DB)
    .then(() => console.log("Database connected successfully 😊"))
    .catch((err) => console.log(err.message));

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
