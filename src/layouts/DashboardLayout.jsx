import React, { useEffect } from "react";
import Topbar from "@/components/ui/Topbar";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/ui/Sidebar";
import { useAuth } from "@/context/useAuth";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { loading, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn && !loading) {
      navigate("/signin");
    }
  }, [isLoggedIn]);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Overlay (Mobile Only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Topbar onSidebarOpen={() => setSidebarOpen(true)} />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
