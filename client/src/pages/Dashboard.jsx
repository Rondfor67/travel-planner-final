import { useEffect, useState } from "react"
import axios from "axios"

import "./Dashboard.css"
import TripForm from "../components/TripForm"
import TripList from "../components/TripList"

export default function Dashboard() {

  const [trips, setTrips] = useState([])

  const fetchTrips = async () => {
    const res = await axios.get("http://localhost:5000/api/trips")
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