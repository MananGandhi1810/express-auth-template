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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
