const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },

  budget: {
    type: Number,
    required: true
  },

  placesToVisit: {
    type: String
  },

  startDate: {
    type: Date
  },

  endDate: {
    type: Date
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model("Trip", tripSchema)