const express = require("express");
const router = express.Router();
const userModle = require("../Modle/usermodle");
const Controllers = require("../Controllers/usercontolller");
const jwt = require("jsonwebtoken");

router.post("/signup", isuserexist, Controllers.signup);

router.post("/login", Controllers.login);

router.post("/addmobile", Controllers.mobile);

router.post("/getmobiles", Controllers.getmobiles);

router.post("/userdetails", authorize, Controllers.userdetails);

router.post("/adddata", Controllers.csvdata);

router.post("/fetchcsvdata", Controllers.fetchdatacsv);

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

function authorize(req, res, next) {
  try {
    let reqheader = req.body.headers["Authorization"];
    const token = reqheader.replace("Bearer ", "");
    const verifiedtoken = jwt.verify(token, "chakradhar");
    req.token = verifiedtoken;
    next();
    return;
  } catch (err) {
    console.log(err);
    res.send({ msg: "you are not authorized", status: false });
  }
}

module.exports = router;
