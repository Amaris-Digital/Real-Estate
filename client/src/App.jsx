import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Home";
import Login from "./components/Login";
import SplashScreen from "./pages/SplashScreen";
import Property from "./components/Property";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import AdminDashBoard from "./components/AdminDashboard";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [loggedInUserRole, setLoggedInUserRole] = useState("");
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
        setLoggedInUserRole(data.user.role);
        console.log(data.user);
      });
  }, [storedToken]);

  return (
    <div>
      <Router>
        <Navbar
          setStoredToken={setStoredToken}
          loggedInUserId={loggedInUserId}
          loggedInUserRole={loggedInUserRole}
          storedToken={storedToken}
        />
        <Routes>
          {storedToken ? (
            <>
              {loggedInUserRole === "admin" ? (
                <Route
                  path="/"
                  element={<AdminDashBoard loggedInUserId={loggedInUserId} />}
                />
              ) : (
                <Route
                  path="/"
                  element={<Home setStoredToken={setStoredToken} />}
                />
              )}
              <Route
                path="/property/:id"
                element={<Property loggedInUserId={loggedInUserId} />}
              />
              <Route path="/favorites" element={<Favourites />} />
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
