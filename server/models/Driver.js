const { Schema, model } = require("mongoose");

const driverSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  driverLicence: {
    type: String,
    required: true,
  },
});

const Driver = model("Driver", driverSchema);
module.exports = Driver;
