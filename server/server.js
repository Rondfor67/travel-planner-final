const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const tripRoutes = require("./routes/tripRoutes")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

// подключение MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use("/api/trips", tripRoutes)

// тестовый маршрут
app.get("/", (req, res) => {
  res.send("Travel Planner API working")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})