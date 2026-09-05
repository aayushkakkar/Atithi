const express = require("express");
const router = express.Router();

const passport = require("passport");

const wrapAsync = require("../utils/wrapAsync.js");

const userController = require("../controllers/userControl.js");

router.route("/signup")
.get(userController.renderSignUpForm)
.post(
  wrapAsync(userController.signUp),
);

router.route("/login")
.get(userController.renderLogInForm)
.post(
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.logIn),
);

router.get("/logout", userController.logOut);

module.exports = router;
