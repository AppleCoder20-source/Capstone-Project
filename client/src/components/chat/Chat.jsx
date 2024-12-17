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
