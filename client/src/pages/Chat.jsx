import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export function Chat({ message, isAssistant }) {
  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"} mb-4`}>
      {isAssistant && (
        <div className="mr-4">
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
            🤖
          </div>
        </div>
      )}
      <div
        className={`rounded-lg p-3 max-w-[75%] shadow-md text-sm ${
          isAssistant
            ? "bg-blue-100 text-blue-800"
            : "bg-blue-300 text-black-800"
        }`}
      >
        <ReactMarkdown>{message}</ReactMarkdown> 
        </div>
    </div>
  );
}
function ChatBox() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am an AI Finance Coach ready to become a millionare?",
    },
  ]);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat and show a placeholder assistant response
    const newMessages = [
      ...messages,
      { role: "user", content: message.trim() },
      { role: "assistant", content: "Typing..." },
    ];
    setMessages(newMessages);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({prompt: message }), // Send user message to API
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data)

      // Update assistant's placeholder message with the actual response
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        { role: "assistant", content: data.response }, // Use `data.response` from the backend
      ]);
    } catch (error) {
      console.error("Error fetching assistant response:", error);

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: "assistant", content: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Finance Coach</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4 flex flex-col h-[70vh]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {messages.map((message, index) => (
            <Chat
              key={index}
              message={message.content}
              isAssistant={message.role === "assistant"}
            />
          ))}
        </div>

        {/* Input Area */}
        <form className="mt-4 flex space-x-2" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={inputRef}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
