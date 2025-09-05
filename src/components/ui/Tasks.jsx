export default function Tasks() {
  // Later you’ll fetch tasks from backend here
  const tasks = [
    "Prepare project proposal by Friday",
    "Review AI assistant integration plan",
    "Schedule client meeting",
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Your Tasks</h3>
      <ul className="list-disc pl-6 text-gray-600 text-sm space-y-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
