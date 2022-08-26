const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const csvdata = new Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

const tcsvdata = mongoose.model("csv", csvdata);
module.exports = tcsvdata;
