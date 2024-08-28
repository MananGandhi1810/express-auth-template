var express = require("express");
var router = express.Router();

const {
  registerHandler,
  verifyHandler,
  loginHandler,
  userDataHandler,
} = require("../handlers/auth.js");
const { checkAuth } = require("../middlewares/auth");

router.post("/register", registerHandler);
router.get("/verify", verifyHandler);
router.post("/login", loginHandler);
router.get("/user", checkAuth, userDataHandler);

module.exports = router;
