const express = require("express");
const router = express.Router();
const userModle = require("../Modle/usermodle");
const Controllers = require("../Controllers/usercontolller");

router.post("/signup", isuserexist, Controllers.signup);

router.post("/login", Controllers.login);

router.post("/addmobile", Controllers.mobile);

router.post("/getmobiles", Controllers.getmobiles);

async function isuserexist(req, res, next) {
  let useremail = req.body.email;
  const user = await userModle.findOne({ email: useremail });
  if (!user) {
    next();
    return;
  } else {
    res.send({ msg: "User With This Email Already Exist", status: false });
  }
}

module.exports = router;
