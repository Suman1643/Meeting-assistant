import AiAssistant from "@/components/ui/AiAssistant";

export default function Meetings() {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold">Meetings Page</h1>
      <p className="text-gray-600">
        This is where your meeting list or live meetings will appear.
      </p>

      {/* Floating AI Assistant (bottom-right) */}
      <AiAssistant />
    </div>
  );
}
