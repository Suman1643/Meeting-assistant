import { NavLink } from "react-router-dom";
import { Home, Calendar, FileText, Settings, Upload, BarChart3, X } from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const navClasses =
    "flex items-center space-x-2 p-2 rounded hover:bg-gray-100 transition";
  const activeClasses = "bg-gray-200 font-semibold";

  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 w-64 bg-white border-r z-40 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Menu</h2>
        <button
          onClick={onClose}
          className="md:hidden p-1 rounded hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Home size={20} /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/meetings"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Calendar size={20} /> <span>Meetings</span>
        </NavLink>
        <NavLink
          to="/status"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <FileText size={20} /> <span>Meeting Status</span>
        </NavLink>
        <NavLink
          to="/uploads"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Upload size={20} /> <span>Uploads</span>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <BarChart3 size={20} /> <span>Analytics</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${navClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Settings size={20} /> <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}
