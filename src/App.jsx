import React from "react";
import { Button } from "@/components/ui/button";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Divide } from "lucide-react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Auth pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// Core pages
import Dashboard from "./pages/Dashboard";
import LiveCall from "./pages/LiveCall";

// Sidebar-linked pages
import Meetings from "./pages/Meetings";
import Status from "./pages/Status";
import Uploads from "./pages/Uploads";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route → Home/Dashboard */}
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}

        {/* Dashboard / Home */}
        {/* <Route path="/home" element={<Dashboard />} /> */}

        {/* Sidebar routes
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/status" element={<Status />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} /> */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="status" element={<Status />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* Auth routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Live meeting page */}
        {/* <Route path="/livecall" element={<LiveCall />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
