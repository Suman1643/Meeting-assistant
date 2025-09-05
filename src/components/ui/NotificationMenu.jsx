import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function NotificationMenu() {
  // Fake notifications (replace with props or API later)
  const notifications = [
    { id: 1, text: "Task: Finish project report by 5 PM" },
    { id: 2, text: "Meeting: Team sync at 3 PM" },
    { id: 3, text: "Reminder: Submit timesheet today" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <DropdownMenuItem key={n.id}>{n.text}</DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem>No notifications</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
