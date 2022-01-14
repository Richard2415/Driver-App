const { Schema, model } = require("mongoose");

const truckSchema = new Schema({
  rego: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
  },
  truckDriver: {
    type: String,
    required: true,
    trim: true,
  },
});

const Truck = model("Truck", truckSchema);

module.exports = Truck;
