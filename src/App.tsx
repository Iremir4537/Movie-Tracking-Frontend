import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : isSignUp ? (
        <Register onRegister={handleLogin} onToggle={toggleSignUp} />
      ) : (
        <Login onLogin={handleLogin} onToggle={toggleSignUp} />
      )}
    </div>
  );
};

export default App;
