export default function MyFeed() {
  // Later you’ll fetch real data from backend here
  const recentMeetings = [
    {
      id: 1,
      title: "Initial Interaction and Setup",
      detail: "User tested microphone...",
    },
    {
      id: 2,
      title: "News and Info Requests",
      detail: "Fireflies AI provided updates...",
    },
    {
      id: 3,
      title: "Competitive Analysis",
      detail: "Discussed position in market...",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Recent Meetings</h3>
      {recentMeetings.map((meeting) => (
        <p key={meeting.id} className="text-gray-600 text-sm">
          <strong>{meeting.title}:</strong> {meeting.detail}
        </p>
      ))}
    </div>
  );
}
