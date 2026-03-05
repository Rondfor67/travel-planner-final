const express = require("express")
const router = express.Router()

const Trip = require("../models/Trip")
//get all
router.get("/", async (req, res) => {
  const trips = await Trip.find()
  res.json(trips)
})

//post(create)trip
router.post("/", async (req, res) => {
  const newTrip = new Trip(req.body)
  const savedTrip = await newTrip.save()
  res.json(savedTrip)
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