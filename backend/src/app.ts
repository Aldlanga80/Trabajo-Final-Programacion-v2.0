import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import productsRoutes from "./routes/productsRoutes";
import errorHandler from "./middlewares/errorHandler";
import { rateLimiterAuth } from "./middlewares/rateLimiter";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(":method :url :status :response-time ms"));

app.use("/api/auth", rateLimiterAuth, authRoutes);
app.use("/api/products", productsRoutes);

app.use(errorHandler);

export default app;
