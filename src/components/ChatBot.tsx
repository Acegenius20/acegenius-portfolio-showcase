
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-navy border border-teal rounded-lg shadow-lg flex flex-col transition-all duration-300 animate-scale">
          <div className="flex items-center justify-between bg-lightNavy p-3 rounded-t-lg border-b border-lightestNavy">
            <div className="flex items-center text-white">
              <MessageCircle className="h-5 w-5 text-teal mr-2" />
              <span className="font-medium">Chat with me</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-7 w-7 text-slate hover:text-white hover:bg-lightestNavy rounded-full"
              onClick={toggleChatbot}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-[350px] h-[600px]">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/l8LX4JD5NDcr3Us7lrVl5"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-b-lg"
            ></iframe>
          </div>
        </div>
      ) : (
        <Button 
          onClick={toggleChatbot}
          className="rounded-full w-14 h-14 bg-teal hover:bg-teal/90 text-navy shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
