const express = require("express");
const mongoose = require("mongoose");
const server = express();
const bp = require("body-parser");
server.use(bp.json());
const cors = require("cors");
server.use(cors());
const user = require("./Routes/users");

server.use("/", user);
mongoose
  .connect("mongodb://localhost:27017/Practice")
  .then((res) => console.log("connected to db"))
  .catch((err) => console.log(err));

const PORT = 3001;
server.listen(PORT, () => console.log(`server started at port ${PORT}`));
