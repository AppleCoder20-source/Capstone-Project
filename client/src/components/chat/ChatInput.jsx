export function ChatInput({ value, onChange, onSubmit, inputRef }) {
  return (
    <form className="mt-4 flex space-x-2" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 p-3 rounded-full bg-blue-300 to-blue-400 border border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        Send
      </button>
    </form>
  );
}
