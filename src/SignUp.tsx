import React, { useState } from "react";
import "./Login.css";

interface SignUpProps {
  onSignUp: () => void;
  onToggle: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onToggle }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Burada gerçek sign up işlemi yapılabilir
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    onSignUp();
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
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

export default SignUp;
