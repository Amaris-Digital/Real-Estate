import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Home";
import Login from "./components/Login";
import SplashScreen from "./pages/SplashScreen";
import Property from "./components/Property";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUserId(data.user.id);
        console.log(data.user);
      });
  }, [storedToken]);

  return (
    <div>
      <Router>
        <Routes>
          {storedToken ? (
            <>
              <Route
                path="/"
                element={<Hello setStoredToken={setStoredToken} />}
              />
              <Route
                path="/property/:id"
                element={<Property loggedInUserId={loggedInUserId} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<SplashScreen setStoredToken={setStoredToken} />}
              />
              <Route
                path="/signup"
                element={<SignUp setStoredToken={setStoredToken} />}
              />

              <Route
                path="/login"
                element={<Login setStoredToken={setStoredToken} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
