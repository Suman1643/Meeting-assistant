import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/useAuth";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
          <User size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <p>Asish patro</p>
          </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <p>asish3@gmail.com</p>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
