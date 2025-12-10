'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatbotModal from './ChatbotModal';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMinimize = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-0 right-4 md:bottom-0 md:right-6 w-36 h-10 md:w-36 md:h-10 rounded-t-3xl shadow-lg flex items-center justify-left pl-3 transition-all duration-300 z-40 ${
          isOpen ? 'bg-gray-400 hover:bg-gray-500' : 'bg-[#dac18c] hover:bg-amber-400'
        }`}
        title="Chat with us"
      >
     <p className='text-white'> online</p> 

        {/* Notification badge (optional - can be used to show new messages) */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#c4a35a] rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Tooltip */}
      {isHovered && !isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg z-40 whitespace-nowrap">
          Chat with Eden Weave AI
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45" />
        </div>
      )}

      {/* Chat Modal */}
      <ChatbotModal
        isOpen={isOpen}
        onClose={toggleChat}
        onMinimize={handleMinimize}
      />
    </>
  );
}
