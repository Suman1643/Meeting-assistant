import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Auth pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// Core pages
import Dashboard from "./pages/Dashboard";

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
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="status" element={<Status />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
