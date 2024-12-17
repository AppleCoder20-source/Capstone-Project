import ChatBox from "../components/chat/ChatBox";

export default function ChatPage() {
  return (
  
    <div className="relative flex flex-col items-center  min-h-screen">
      <div className="w-full max-w-3xl bg-black text-blue-800 rounded-lg shadow-lg p-4">
        <ChatBox />
      </div>
      {/* Button  */}
      <div className="mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          □
        </button>
      </div>
    </div>
  );
}
