"use client"; // (only if you're in Next.js app directory)

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi Nishant 👋! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // 🔹 Auto scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch("https://h4b-chatbot-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          chat_history: messages.map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text
          }))
        })
      });

      const data = await res.json();
      console.log("Backend Response:", data);
      const botMessage = { sender: "bot", text: data.response };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠ Error: Could not reach backend." }
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition text-2xl"
      >
        💬
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-3 font-semibold flex justify-between items-center">
              <span>Chatbot</span>
              <button
                onClick={() => setShowChat(false)}
                className="text-white text-lg font-bold"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-64">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
