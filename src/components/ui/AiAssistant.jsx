import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiAssistant() {
  const [question, setQuestion] = useState("");

  const handleSend = async () => {
    if (!question.trim()) return;

    try {
      // Example API call (replace with your backend or OpenAI endpoint)
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
      });

      const data = await res.json();
      console.log("Assistant Response:", data.answer);
      // TODO: show in UI (chat bubbles)
    } catch (err) {
      console.error("Error:", err);
    }

    setQuestion(""); // clear input after sending
  };

  return (
    <div>
      {/* Floating Circular Button */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700">
            <MessageCircle size={28} />
          </button>
        </SheetTrigger>

        {/* Right-Side Panel */}
        <SheetContent side="right" className="w-[380px] sm:w-[420px] flex flex-col p-4">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">AskFred</SheetTitle>
          </SheetHeader>

          {/* Main content scrollable */}
          <div className="flex-1 overflow-y-auto space-y-4 mt-4 pr-1">
            <p className="text-gray-600 text-sm">
              Hello 👋 I am your AI Assistant. Ask me anything about your meetings,
              tasks, or content creation.
            </p>

            {/* Suggested Questions */}
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setQuestion("What were the main topics?")}
              >
                What were the main topics?
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setQuestion("Outline the next steps and deadlines.")}
              >
                Outline the next steps and deadlines.
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setQuestion("Identify the key decisions made.")}
              >
                Identify the key decisions made.
              </Button>
            </div>
          </div>

          {/* Input Box fixed at bottom */}
          <div className="flex items-center space-x-2 border-t pt-3">
            <input
              type="text"
              placeholder="Ask a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
