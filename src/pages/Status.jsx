import AiAssistant from "@/components/ui/AiAssistant";

export default function Status() {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold">Meeting Status</h1>
      <p className="text-gray-600">
        This page will show the status of ongoing/past meetings.
      </p>
      <AiAssistant />
    </div>
  );
}
