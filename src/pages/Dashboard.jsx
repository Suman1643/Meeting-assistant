import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyFeed from "@/components/ui/MyFeed";
import Tasks from "@/components/ui/Tasks";

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

            {/* Tasks Content */}
            <TabsContent value="tasks">
              <Tasks />
            </TabsContent>
          </Tabs>
        </main>
  );
}
