import { Router } from "express";
import {
  registerHandler,
  verifyHandler,
  loginHandler,
  resendVerificationHandler,
  userDataHandler,
} from "../handlers/auth.js";

import { checkAuth } from "../middlewares/auth.js";

var router = Router();

router.post("/register", registerHandler);
router.get("/verify", verifyHandler);
router.post("/login", loginHandler);
router.post("/resend-verification", resendVerificationHandler);
router.post("/forgot-password", ()=>{});
router.post("/verify-otp", ()=>{});
router.post("/reset-password", ()=>{});
router.get("/user", checkAuth, userDataHandler);

export default router;
