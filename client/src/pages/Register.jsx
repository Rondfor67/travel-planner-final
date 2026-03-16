import { useState } from "react";
import { API_URL } from "../config"
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import axios from "axios"

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(`${API_URL}/auth/register`, {
        email,
        password
      });

      navigate("/login");

    } catch (err) {
      alert("Registration error");
    }
  };

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2>Register</h2>

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

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>
  );
}