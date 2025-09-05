import MeetingModal from "./MeetingModal";
import ProfileMenu from "./ProfileMenu";
import { Menu } from "lucide-react";
import RecordButton from "./RecordButton";
import NotificationMenu from "./NotificationMenu";

export default function Topbar({ onSidebarOpen }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Left: Sidebar toggle + Meeting Modal */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onSidebarOpen}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
        >
          <Menu size={24} />
        </button>
        <MeetingModal />
      </div>

      {/* Right: Recording, Notifications, Profile Menu */}
      <div className="flex items-center space-x-4">
        <RecordButton />
        <NotificationMenu />
        <ProfileMenu />
      </div>
    </header>
  );
}
