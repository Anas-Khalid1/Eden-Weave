"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Minimize2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
export default function ChatbotModal({ isOpen, onClose, onMinimize }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("eden-weave-chat-history");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Failed to load chat history:", error);
      }
    } else {
      // Set welcome message if no history
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! 👋 I'm here to help you learn about the Eden Weave Foundation. Feel free to ask me about our mission, how to donate, volunteer opportunities, or any other questions you might have!",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("eden-weave-chat-history", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: "user",
      content: inputMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Send message to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      // Add assistant response to chat
      const assistantMessage = {
        role: "assistant",
        content: data.response,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");

      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I encountered an error. Please try again or contact us directly at edenweavefoundation@gmail.com.",
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    localStorage.removeItem("eden-weave-chat-history");
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared! How can I help you today?",
        timestamp: new Date().toISOString(),
      },
    ]);
    toast.success("Chat history cleared");
  };

  const suggestedQuestions = [
    "How can I donate?",
    "Tell me about volunteer opportunities",
    "What is Eden Weave Foundation's mission?",
    "How can I get involved?",
  ];

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 md:right-6 w-[95vw] md:w-[340px] h-[470px] rounded-t-xl bg-transparent shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="w-20 h-10 rounded-full flex items-center justify-center font-bold text-[#1e3a5f]">
            <Image src="/logo.png" width={100} height={200} alt="Eden Weave Logo" className="w-25 h-15" />
          </div> */}
          <div>
            <h3 className="font-semibold text-base">Eden Weave Assistant</h3>
          
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMinimize}
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
            title="Minimize"
          >
            <Minimize2 size={18} />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-lg ${
                msg.role === "user"
                  ? "bg-[#1e3a5f] text-white"
                  : msg.isError
                  ? "bg-red-50 text-red-800 border border-red-200"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words">
                {msg.content}
              </p>
              <span className="text-xs opacity-60 mt-1 block">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2.5 rounded-lg flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-[#c4a35a]" />
              <span className="text-sm">Typing...</span>
            </div>
          </div>
        )}

        {/* Suggested questions (only show when chat is empty or just welcome message) */}
        {messages.length <= 1 && !isLoading && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-gray-500 font-medium">
              Suggested questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-white border border-[#c4a35a] text-[#1e3a5f] rounded-full hover:bg-[#c4a35a] hover:text-white transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
        <div className="flex gap-2 mb-2">
          <button
            onClick={clearChat}
            className="text-xs text-gray-500 hover:text-[#1e3a5f] transition-colors"
          >
            Clear chat
          </button>
        </div>
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="px-4 py-2.5 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2a4a7f] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            title="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
