import AiAssistant from "@/components/ui/AiAssistant";

export default function Settings() {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold">Settings</h1>
      <p className="text-gray-600">
        Manage your profile and meeting assistant settings here.
      </p>
      <AiAssistant />
    </div>
  );
}
