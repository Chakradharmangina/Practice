const userModle = require("../Modle/usermodle");
const mobileModle = require("../Modle/mobiles");
const tcsvmodle = require("../Modle/csvmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
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
        const generatedtoken = jwt.sign({ email: data.email }, "chakradhar", {
          expiresIn: "1h",
          algorithm: "HS512",
          issuer: "charan",
        });
        res.status(200).send({
          username: user.username,
          msg: "login successfull",
          status: true,
          useremail: user.email,
          token: generatedtoken,
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

Controllers.mobile = async function (req, res) {
  let data = req.body;
  try {
    const result = mobileModle.create({
      MobileName: data.mobilename,
      Price: data.price,
      Brand: data.brand,
      Discription: data.discription,
    });
    res.send({
      msg: "item added sucessfully",
    });
  } catch (err) {
    res.send(err);
  }
};

Controllers.getmobiles = async function (req, res) {
  try {
    const items = await mobileModle.find();
    res.json({ items });
  } catch (err) {
    console.log(err);
  }
};

Controllers.userdetails = async function (req, res) {
  let useremail = req.token.email;
  try {
    let user = await userModle.findOne({ email: useremail });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

Controllers.csvdata = async function (req, res) {
  try {
    let data = req.body.csvdata;
    await tcsvmodle.collection.insertMany(data);
    res.send({ msg: "cvs data is inserted" });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

Controllers.fetchdatacsv = async function (req, res) {
  try {
    let data = await tcsvmodle.find({});
    res.json({ data });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

module.exports = Controllers;
