import { API_URL } from "../config"
import "./TripList.css"
import axios from "axios"
export default function TripList({ trips, fetchTrips }) {

  const deleteTrip = async (id) => {

    const confirmDelete = window.confirm("Delete this trip?")
  
    if (!confirmDelete) {
      return
    }
  
    await axios.delete(`${API_URL}/trips/${id}`)
  
    fetchTrips()
  }

  const editTrip = async (trip) => {

    const newDestination = prompt("Destination:", trip.destination)
    const newBudget = prompt("Budget:", trip.budget)
    const newPlaces = prompt("Places to visit:", trip.placesToVisit)
  
    if (newDestination === null || newBudget === null || newPlaces === null) {
      return
    }
  
    await axios.put(`${API_URL}/trips/${trip._id}`, {
      ...trip,
      destination: newDestination,
      budget: newBudget,
      placesToVisit: newPlaces
    })
  
    fetchTrips()
  }

  return (
    <div>
      <h3>Your Trips</h3>

      {trips.map((trip) => (
        <div key={trip._id} className="trip-card">
          <h4>{trip.destination}</h4>

          <p>Budget: {trip.budget}</p>

          <p>Places: {trip.placesToVisit}</p>

          <p>Start date: {new Date(trip.startDate).toLocaleDateString()}</p>
          <p>End date: {new Date(trip.endDate).toLocaleDateString()}</p>

          <button onClick={() => deleteTrip(trip._id)}>
            Delete
          </button>

          <button onClick={() => editTrip(trip)}>
            Edit
          </button>

        </div>
      ))}

    </div>
  )
}