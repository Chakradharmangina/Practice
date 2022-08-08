const userModle = require("../Modle/usermodle");
const bcrypt = require("bcrypt");
let Controllers = {};

Controllers.signup = async function (req, res) {
  let data = req.body;
  const hashedpass = await bcrypt.hash(data.password, 5);
  try {
    const result = userModle.create({
      email: data.email,
      password: hashedpass,
      username: data.username,
      phonenumber: data.phonenumber,
    });
    res.send(
      "signup sucessfull ,Now  You can login with your email and password"
    );
  } catch (err) {
    res.send(err);
  }
};

module.exports = Controllers;
