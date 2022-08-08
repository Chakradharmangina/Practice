const express = require("express");
const router = express.Router();
const userModle = require("../Modle/usermodle");
const Controllers = require("../Controllers/usercontolller");

router.post("/signup", isuserexist, Controllers.signup);

async function isuserexist(req, res, next) {
  let useremail = req.body.email;
  const user = await userModle.findOne({ email: useremail });
  if (!user) {
    next();
    return;
  } else {
    res.send("user with this Email already exist");
  }
}

module.exports = router;
