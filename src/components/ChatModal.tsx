import { useEffect, useRef, useState } from "react";
import api from "../services/api";

interface ChatModalProps {
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  text: string;
}

const ChatModal = ({ onClose }: ChatModalProps) => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello! 👋 How can I help you with HR-related questions?"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);


  const sendMessage = async () => {

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage
      }
    ]);

    setMessage("");
    setLoading(true);

    try {

      const response = await api.post(
        "/api/chat",
        {
          message: userMessage,
          empCode: "EMP001"
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: response.data.data.answer
        }
      ]);

    } catch (error) {

      console.error("Chat API error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I couldn't process your question."
        }
      ]);

    } finally {

      setLoading(false);

    }
  };


  return (
    <div
      className="
        fixed
        bottom-24
        right-6
        w-96
        h-[520px]
        bg-white
        rounded-2xl
        shadow-2xl
        border
        flex
        flex-col
        overflow-hidden
        z-50
      "
    >

      {/* Header */}

      <div className="bg-blue-600 text-white px-5 py-4 flex justify-between items-center">

        <div>
          <h2 className="font-semibold">
            🤖 AI HRMS Assistant
          </h2>

          <p className="text-xs text-blue-100">
            Ask your HR questions
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-xl hover:text-gray-200"
        >
          ✕
        </button>

      </div>


      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {/* {msg.text} */}
              {msg.text.split("\n").map((line, i) => (
                <div key={i}>
                  {line}
                </div>
              ))}
            </div>

          </div>

        ))}


        {/* AI typing */}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-xl text-sm">
              AI is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />

      </div>


      {/* Input */}

      <div className="border-t p-3 flex gap-2">

        <input
          type="text"
          placeholder="Ask your HR question..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="
            flex-1
            border
            rounded-lg
            px-3
            py-2
            text-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
            disabled:bg-gray-100
          "
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            bg-blue-600
            text-white
            px-4
            rounded-lg
            hover:bg-blue-700
            disabled:bg-gray-400
            px-4
            rounded-lg
          "
        >
          ➤
        </button>

      </div>

    </div>
  );
};

export default ChatModal;