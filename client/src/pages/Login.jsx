import { useState } from "react";
import { API_URL } from "../config"
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import axios from "axios"

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
      `${API_URL}/auth/login`,
      { email, password }
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err) {

      alert("Login error");

    }

  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Travel Planner</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  );
}