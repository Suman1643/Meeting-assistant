import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyFeed from "@/components/ui/MyFeed";
import Tasks from "@/components/ui/Tasks";
import AiAssistant from "@/components/ui/AiAssistant";

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <Tabs defaultValue="feed" className="w-full">
        <TabsList>
          <TabsTrigger value="feed">My Feed</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="feed">
          <MyFeed />
        </TabsContent>

        <TabsContent value="tasks">
          <Tasks />
        </TabsContent>
      </Tabs>

      {/* Floating AI Assistant */}
      <AiAssistant />
    </main>
  );
}
