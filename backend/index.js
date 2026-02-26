import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.routes.js";
import cookieParser  from 'cookie-parser'
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/api/auth", userRoutes);

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log("Mongodb connected");
// });

try {
  mongoose.connect(process.env.LOCAL_MONGODB_URI).then(() => {
    console.log("Mongodb connected");
  });
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT, () => {
  console.log(`Server started running at: ${process.env.PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
