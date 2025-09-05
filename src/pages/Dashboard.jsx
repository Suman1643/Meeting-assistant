import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyFeed from "@/components/ui/MyFeed";
import Tasks from "@/components/ui/Tasks";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // <div className="flex h-screen bg-gray-100">
      // <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      /* Overlay (Mobile Only) */      // {sidebarOpen && (
      //   <div
      //     className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      //     onClick={() => setSidebarOpen(false)}
      //   ></div>
      // )}

      // <div className="flex flex-col flex-1">
        // <Topbar onSidebarOpen={() => setSidebarOpen(true)} />

        <main className="flex-1 p-6 overflow-y-auto">
          <Tabs defaultValue="feed" className="w-full">
            {/* Tab Buttons */}
            <TabsList>
              <TabsTrigger value="feed">My Feed</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>

            {/* My Feed Content */}
            <TabsContent value="feed">
              <MyFeed />
            </TabsContent>

            {/* Tasks Content */}
            <TabsContent value="tasks">
              <Tasks />
            </TabsContent>
          </Tabs>
        </main>
      // </div>
    // </div>
  );
}
