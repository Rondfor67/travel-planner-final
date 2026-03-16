const express = require("express")
const router = express.Router()

const Trip = require("../models/Trip")
const authMiddleware = require("../middleware/authMiddleware")
//get all
router.get("/", authMiddleware, async (req, res) => {
  const trips = await Trip.find({ user: req.user.id });
  res.json(trips);
})

//post(create)trip
router.post("/", authMiddleware, async (req, res) => {
  const trip = new Trip({
    ...req.body,
    user: req.user.id
  });
  await trip.save();
  res.json(trip);
})

//put(update)trip
router.put("/:id", async (req, res) => {
  const updatedTrip = await Trip.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedTrip)
})

//udalit trip
router.delete("/:id", async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id)
  res.json({ message: "Trip deleted" })
})

module.exports = router