import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import App from "../App";

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
}
