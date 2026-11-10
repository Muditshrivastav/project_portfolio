import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Cpu, AlertCircle } from "lucide-react";

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

interface AiChatBubbleProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function AiChatBubble({ isOpen, onClose, onOpen }: AiChatBubbleProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hi there! I am Mudit's AI Representative. Feel free to ask me anything about his technical skills, hands-on experience, projects, or achievements!",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const suggestionChips = [
    "Tell me about 'MCP Router'",
    "Tell me about 'AI Coding Agent'",
    "What AI/ML frameworks does he know?",
    "Where does Mudit study?",
    "Schedule an Interview!",
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMessageText = textToSend;
    setInputText("");

    // Append user message
    setMessages((prev) => [...prev, { role: "user", text: userMessageText }]);
    setIsLoading(true);

    try {
      // Proxy chat payload to our server-side Express endpoint
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessageText,
          history: messages, // Send chat context along
        }),
      });

      if (!response.ok) {
        throw new Error("Server-side request failed. Please check if GEMINI_API_KEY is configured.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.details || data.error);
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (err: any) {
      console.error("AI Assistant request failure:", err);
      setErrorStatus(err.message || "An unexpected error occurred connecting to the Gemini server.");
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I apologize, but I encountered issues accessing my generative intelligence gateway. Please verify that your Gemini API Key is configured in Settings > Secrets. You can contact Mudit directly at Ramshrivastav33@gmail.com!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <>
      {/* Floating Trigger button */}
      <div className="fixed bottom-6 right-6 z-40" id="chat-trigger-bubble">
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-blue-600 text-white font-mono font-semibold text-xs uppercase tracking-widest px-4.5 py-4 rounded-none shadow-[0_10px_30px_rgba(37,99,235,0.35)] border border-blue-500/20 hover:bg-blue-500 transition-colors cursor-pointer"
          id="btn-trigger-ai-chat"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-none h-2.5 w-2.5 bg-neutral-950"></span>
            </span>
            <MessageSquare className="h-4.5 w-4.5" />
          </div>
          <span>Representative AI</span>
        </motion.button>
      </div>

      {/* Floating Panel overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 w-[360px] sm:w-[400px] h-[550px] bg-[#0C0C0C] rounded-none border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col z-50 overflow-hidden"
            id="chat-overlay-panel"
          >
            {/* Header section */}
            <div className="bg-neutral-950 border-b border-neutral-900 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2.5 text-left">
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-none select-none font-mono">
                  <Cpu className="h-4.5 w-4.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                    Mudit's AI Agent
                  </h4>
                  <div className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-blue-400 font-mono" />
                    <span className="text-[10px] font-mono text-blue-400/90 font-medium">Grounded Credentials</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-white rounded-none hover:bg-neutral-900 cursor-pointer"
                id="btn-close-ai-chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Error alerts indicator */}
            {errorStatus && (
              <div className="bg-red-950/20 border-b border-red-500/20 px-4 py-2 flex items-center space-x-2 text-left" id="chat-api-error-badge">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                <span className="text-[10px] font-mono text-red-300">API connection issue detected. Key may be required.</span>
              </div>
            )}

            {/* Message Thread list */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin flex flex-col bg-neutral-950/40">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} text-left`}
                  id={`chat-msg-row-${index}`}
                >
                  <div
                    className={`max-w-[82%] rounded-none px-3.5 py-2.5 text-[12px] sm:text-xs font-mono shadow-sm ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white font-medium"
                        : "bg-[#141414] border border-neutral-800 text-neutral-200 whitespace-pre-wrap leading-relaxed"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Waiting ticker dots */}
              {isLoading && (
                <div className="flex justify-start text-left" id="chat-loading-dots-row">
                  <div className="bg-[#141414] border border-neutral-800 rounded-none px-4 py-3">
                    <div className="flex space-x-1 items-center h-2">
                      <span className="w-1.5 h-1.5 bg-blue-450 bg-blue-400 rounded-none animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-blue-450 bg-blue-400 rounded-none animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-blue-450 bg-blue-400 rounded-none animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* In-chat suggestion chips drawer */}
            <div className="px-4 py-2 border-t border-neutral-900 flex flex-wrap gap-1.5 bg-neutral-950 justify-start align-middle" id="chat-chips-drawer">
              {suggestionChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendMessage(chip)}
                  disabled={isLoading}
                  className="text-[9px] font-mono whitespace-nowrap px-2.5 py-1.5 rounded-none border border-neutral-800 bg-[#0F0F0F] text-neutral-400 hover:border-blue-500/30 hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
                  id={`btn-chat-chip-${chip.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Message input interface */}
            <form
              onSubmit={handleFormSubmit}
              className="p-4 bg-neutral-950 border-t border-neutral-900 flex items-center space-x-2"
              id="chat-input-form"
            >
              <input
                type="text"
                placeholder="Ask representation agent..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-[#0F0F0F] border border-neutral-800 rounded-none px-3.5 py-2.5 text-xs font-mono text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500 disabled:opacity-55"
                id="input-chat-text"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 bg-blue-600 text-white rounded-none hover:bg-blue-500 disabled:bg-neutral-900 disabled:text-neutral-600 border border-transparent transition-all cursor-pointer select-none shrink-0 font-mono"
                id="btn-chat-submit"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
