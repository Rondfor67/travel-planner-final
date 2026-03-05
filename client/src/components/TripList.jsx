import axios from "axios"
import "./TripList.css"
export default function TripList({ trips, fetchTrips }) {

  const deleteTrip = async (id) => {
    await axios.delete(`http://localhost:5000/api/trips/${id}`)
    fetchTrips()
  }

const editTrip = async (trip) => {

  const newDestination = prompt("Destination:", trip.destination)
  const newBudget = prompt("Budget:", trip.budget)
  const newPlaces = prompt("Places to visit:", trip.placesToVisit)

  await axios.put(`http://localhost:5000/api/trips/${trip._id}`, {
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