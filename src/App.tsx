import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ChatButton from "./components/ChatButton";
import ChatModal from "./components/ChatModal";

function App() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1">

        <Dashboard />

      </main>


      {/* AI Chat */}

      {isChatOpen && (
        <ChatModal
          onClose={() => setIsChatOpen(false)}
        />
      )}

      <ChatButton
        onClick={() => setIsChatOpen(true)}
      />

    </div>
  );
}

export default App;