import AiAssistant from "@/components/ui/AiAssistant";

export default function Uploads() {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold">Uploads</h1>
      <p className="text-gray-600">Here you can manage your uploaded files or meeting documents.</p>
      <AiAssistant />
    </div>
  );
}
