import express from "express";
import cors from "cors";
import authRouter from "./router/auth.js";
import morgan from "morgan";

const app = express();

morgan.token("user-id", (req, _) => {
    return req.user != undefined ? req.user.id : "Unauthenticated";
});
morgan.token("ip", (req, _) => {
    return getIp(req);
});
morgan.token("error", (req, _) => {
    return req.error ? req.error : "";
});
app.enable("trust proxy");
const logFormat = `[:date[web]] :ip - ":method :url HTTP/:http-version" :status ":referrer" ":user-agent" User::user-id - :response-time ms :error`;
app.use(morgan(logFormat));
app.use(express.json());
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

app.use("/auth", authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "This route could not be found",
        data: null,
    });
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500).json({
        success: false,
        message: "An unexpected error occured",
        data: null,
    });
});

export default app;
