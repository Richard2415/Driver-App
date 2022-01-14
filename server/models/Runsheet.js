const { Schema } = require('mongoose');

const runsheetSchema = new Schema({
  date: {
      type: String,
      required: true,
    },
  startTime:  {
    type: String,
    required: true,
  },
  finishTime:  {
    type: String,
    required: true,
  },
  startOdometer:  {
    type: String,
    required: true,
  },
  finishOdometer:  {
    type: String,
    required: true,
  },
});

module.exports = runsheetSchema;