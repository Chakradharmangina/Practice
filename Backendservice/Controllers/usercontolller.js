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
    res.send({
      msg: "signup sucessfull ,Now  You can login with your email and password",
      status: true,
    });
  } catch (err) {
    res.send(err);
  }
};

Controllers.login = async function (req, res) {
  const data = req.body;
  try {
    const user = await userModle.findOne({ email: data.email });
    if (user) {
      const comparison = await bcrypt.compare(data.password, user.password);
      if (comparison) {
        res.status(200).send({
          username: user.username,
          msg: "login successfull",
          status: true,
          useremail: user.email,
        });
      } else {
        res.send({
          msg: "login is not successfull , please check your password",
          status: false,
        });
      }
    } else {
      res.send({
        msg: "email does not exist, please register",
        status: false,
      });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = Controllers;
