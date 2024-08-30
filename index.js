import express from "express";
import cors from "cors";
import authRouter from "./router/auth.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use("/auth", authRouter);

export default app;
