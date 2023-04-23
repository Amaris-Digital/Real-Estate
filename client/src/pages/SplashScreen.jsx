import React from "react";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div>
      Welcome to reall estate application
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default SplashScreen;
