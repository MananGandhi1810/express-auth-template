import { Router } from "express";
import {
    registerHandler,
    verifyHandler,
    loginHandler,
    resendVerificationHandler,
    forgotPasswordHandler,
    resetPasswordHandler,
    verifyOtpHandler,
    userDataHandler,
} from "../handlers/auth.js";

import { checkAuth } from "../middlewares/auth.js";
import { rateLimit } from "../middlewares/rate-limit.js";

var router = Router();

router.post("/register", (req, res, next) => rateLimit(req, res, next, 6, "register"), registerHandler);
router.get("/verify", verifyHandler);
router.post("/login", (req, res, next) => rateLimit(req, res, next, 6, "login"), loginHandler);
router.post("/resend-verification", (req, res, next) => rateLimit(req, res, next, 2, "resend-verification"), resendVerificationHandler);
router.post("/forgot-password", forgotPasswordHandler);
router.post("/verify-otp", verifyOtpHandler);
router.post("/reset-password", resetPasswordHandler);
router.get("/user", checkAuth, userDataHandler);

export default router;
