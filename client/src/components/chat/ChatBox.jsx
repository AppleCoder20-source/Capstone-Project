import { useState, useRef, useEffect } from "react";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am an AI Finance Coach ready to become a millionaire?",
    },
  ]);
  const [message, setMessage] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: message.trim() },
      { role: "assistant", content: "Typing..." },
    ];
    setMessages(newMessages);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: message }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error fetching assistant response:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: "assistant", content: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };
    {/* outer  blue box */}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4">
      <h1 className="text-2xl font-bold text-black mb-10">AI Finance Coach</h1>
      {/* inner blue box */}
      <div className="w-full max-w-2xl bg-blue-300 rounded-lg shadow-lg p-6 flex flex-col h-[75vh]">
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {messages.map((message, index) => (
            <Chat
              key={index}
              message={message.content}
              isAssistant={message.role === "assistant"}
            />
          ))}
        </div>
        <ChatInput
          value={message}
          onChange={setMessage}
          onSubmit={sendMessage}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}

export default ChatBox;
