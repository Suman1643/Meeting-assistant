import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { useState } from "react";

export default function MeetingModal() {
  const [meetingLink, setMeetingLink] = useState("");

  const handleJoinMeeting = (e) => {
    e.preventDefault();
    if (!meetingLink.trim()) return;
    alert("✅ AI Assistant will join meeting: " + meetingLink);
    setMeetingLink("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700">
          <Video size={18} />
          <span>Add to Live Meeting</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Live Meeting</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleJoinMeeting} className="space-y-4">
          <input
            type="url"
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
            placeholder="Paste meeting link here..."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Join Meeting
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
