
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! I'm SoftBot, your software license valuation assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const botResponses: { [key: string]: string } = {
  'hello': "Hello! How can I help you with your software licenses today?",
  'hi': "Hi there! Looking to sell some unused software licenses?",
  'software': "SoftSell helps you monetize unused software licenses. Would you like to get a valuation?",
  'license': "We specialize in all types of software licenses. Enterprise, cloud-based, per-seat licenses, and more. What type do you have?",
  'price': "Our pricing is competitive and transparent. We typically offer 40-60% of retail value depending on demand. Would you like a free valuation?",
  'how': "Our process is simple: 1) Upload your license details, 2) Get a valuation from our team, 3) Accept and get paid within 48 hours!",
  'valuation': "We can provide a free valuation for your unused licenses. Would you like to start by telling me what software licenses you're looking to sell?",
  'payment': "We offer multiple payment methods including bank transfer, PayPal, and crypto. Payments are typically processed within 48 hours of deal acceptance.",
  'contact': "You can reach our team directly at contact@softsell.example or call us at (555) 123-4567. Would you prefer I connect you with a license specialist?",
  'default': "Thanks for your message. To provide you with an accurate valuation of your software licenses, would you like to tell me more about what you're looking to sell? Or you can upload your license details through our form above."
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Chat Opened",
        description: "Our SoftBot is ready to assist you.",
        duration: 3000,
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot thinking and typing
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(newMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    return botResponses.default;
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-softsell-blue text-white flex items-center justify-center shadow-lg hover:bg-softsell-light-blue transition-all duration-300 z-50 hover:scale-110"
        aria-label="Toggle chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden animate-fade-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-softsell-blue to-softsell-light-blue p-4 text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <MessageCircle size={16} />
              </div>
              <div>
                <h3 className="font-medium">SoftBot</h3>
                <p className="text-xs opacity-80">License Valuation Assistant</p>
              </div>
              <button 
                onClick={toggleChat}
                className="ml-auto text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Chat Messages - Replaced with ScrollArea component */}
          <ScrollArea className="flex-1 p-4 bg-gray-50">
            <div className="pr-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`p-3 rounded-2xl max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-softsell-blue text-white rounded-tr-none' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <Textarea
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="min-h-[44px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              <Button 
                type="submit" 
                size="icon"
                className="h-[44px] w-[44px] rounded-full bg-softsell-blue hover:bg-softsell-light-blue flex-shrink-0"
                disabled={!newMessage.trim() || isTyping}
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;

