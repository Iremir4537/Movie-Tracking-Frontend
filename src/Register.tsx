import React, { useState } from "react";
import "./Login.css";
import { register } from "./api";

interface SignUpProps {
  onRegister: () => void;
  onToggle: () => void;
}

const Register: React.FC<SignUpProps> = ({ onRegister, onToggle }) => {
  const [username, setUsername] = useState<string>("");
  const [emailaddress, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await register(username, emailaddress, password);
      console.log("Register successful:", response.data);
      onRegister();
    } catch (error) {
      console.error("Register failed:", error);
      setError("Register failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Register</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={emailaddress}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
      <button className="toggle-button" onClick={onToggle}>
        Already have an account? Login
      </button>
    </div>
  );
};

export default Register;
