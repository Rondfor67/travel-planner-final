import { useState } from "react"
import axios from "axios"
import "./TripForm.css"

export default function TripForm({ fetchTrips }) {
    const [destination, setDestination] = useState("")
    const [budget, setBudget] = useState("")
    const [placesToVisit, setPlacesToVisit] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()

    const newTrip = {
        destination,
        budget,
        placesToVisit,
        startDate,
        endDate,
        user: "123456789012345678901234"
    }

    await axios.post("http://localhost:5000/api/trips", newTrip)

    setDestination("")
    setBudget("")
    setPlacesToVisit("")
    setStartDate("")
    setEndDate("")

    fetchTrips()
  }
  

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <h3>Add Trip</h3>

      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
    />

      <input
        placeholder="Places to visit"
        value={placesToVisit}
        onChange={(e) => setPlacesToVisit(e.target.value)}
      />
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

        <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />

      <button type="submit">Add Trip</button>
    </form>
  )
}