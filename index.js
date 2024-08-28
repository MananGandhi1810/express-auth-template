const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth.js");

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
