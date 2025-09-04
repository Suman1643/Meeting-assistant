import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react"; // user/person icon

function Dashboard() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-end p-6 bg-gray-100 min-h-screen">
      {/* Profile Icon + Dropdown Wrapper */}
      <div className="relative" ref={menuRef}>
        {/* Round User Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <User size={24} />
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg overflow-hidden border animate-fadeIn">
            <Link
              to="/signin"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
