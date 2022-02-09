import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Person } from "@material-ui/icons";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} exact />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
          exact
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
          exact
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
          exact
        />
        <Route path="/profile/:username" element={<Profile />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
