import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./views/Navbar";
import Homepage from "./views/Homepage";
import Loginpage from "./views/Loginpage";
import Registerpage from "./views/Registerpage";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;