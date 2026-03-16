import { useEffect, useState } from "react"
import { API_URL } from "../config"

import "./Dashboard.css"
import TripForm from "../components/TripForm"
import TripList from "../components/TripList"

export default function Dashboard() {

  const [trips, setTrips] = useState([])

  const fetchTrips = async () => {

    const token = localStorage.getItem("token")

    const res = await axios.get(
  `${API_URL}/trips`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)

    setTrips(res.data)
  }

  useEffect(() => {
    fetchTrips()
  }, [])

  return (
    <div className="dashboard">

      <h1>Travel Planner</h1>

      <TripForm fetchTrips={fetchTrips} />

      <TripList trips={trips} fetchTrips={fetchTrips} />

    </div>
  )
}