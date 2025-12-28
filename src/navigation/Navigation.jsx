import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LandingPage from "../pages/LandingPage";
import Layout from "../components/layout/Layout";

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
