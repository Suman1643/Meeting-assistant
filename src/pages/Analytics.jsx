import AiAssistant from "@/components/ui/AiAssistant";

export default function Analytics() {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold">Analytics</h1>
      <p className="text-gray-600">
        This page will show meeting analytics and insights.
      </p>

      {/* Floating AI Assistant (bottom right) */}
      <AiAssistant />
    </div>
  );
}
