const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  MobileName: {
    type: String,
    required: [true, "Mobile Name is Required"],
  },
  Price: {
    type: Number,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Discription: {
    type: String,
  },
});

const MobileModle = mongoose.model("Mobiles", mobileSchema);
module.exports = MobileModle;
