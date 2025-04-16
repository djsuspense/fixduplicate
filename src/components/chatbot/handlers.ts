import { ChangeEvent, FormEvent } from "react";

/**
 * Message object structure for chat conversations
 */
interface ChatMessage {
  role: string;
  content: string;
  id?: string;
  annotations?: Array<{ filename: string }>;
}

/**
 * Parameters for chatbot handler functions
 */
interface ChatbotHandlersParams {
  input: string;
  lastUserInput: string;
  setShowLanding: (value: boolean) => void;
  setLastUserInput: (value: string) => void;
  setIsLoadingResponse: (value: boolean) => void;
  setMessages: (value: ChatMessage[]) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showLanding: boolean;
  messages: ChatMessage[];
  append: (message: ChatMessage) => void;
  reload: () => void;
}

/**
 * Return type for getChatbotHandlers function
 */
interface ChatbotHandlers {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleRetry: () => void;
  handleBackClick: () => void;
  handleFirstVisitClick: () => void;
  handleLocationEventClick: () => void;
  handleNewChat: () => void;
}

/**
 * Creates and returns all handler functions needed for the chatbot component
 * 
 * @param params - Configuration parameters for the handlers
 * @returns Object containing all handler functions
 */
export function getChatbotHandlers({
  append,
  input,
  setShowLanding,
  setIsLoadingResponse,
  handleSubmit,
  setLastUserInput,
  showLanding,
  reload,
  setMessages,
}: ChatbotHandlersParams): ChatbotHandlers {
  /**
   * Handles form submission of user messages
   */
  const onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!input.trim()) return;

    setLastUserInput(input);
    setShowLanding(false);
    setIsLoadingResponse(true);
    handleSubmit(e);        
  };

  /**
   * Handles retry of the last message
   */
  const handleRetry = (): void => {
    setShowLanding(false);
    setIsLoadingResponse(true);    
    reload();
  };

  /**
   * Toggles between landing view and chat view
   */
  const handleBackClick = (): void => {
    setShowLanding(!showLanding);
  };

  /**
   * Handles the "First Time Visitor" prompt button
   */
  const handleFirstVisitClick = (): void => {
    setShowLanding(false);
    setIsLoadingResponse(true);
    append({
      role: "user",
      content:
        "I am a first time visitor to this chatbot service. What can you help me with, and can you please tell me a little bit more about Scoop News Group, AI Week, AITalks and what topics will be covered at these events?"
    });
  };
  
  /**
   * Handles the "Location of the event" prompt button
   */
  const handleLocationEventClick = (): void => {
    setShowLanding(false);
    setIsLoadingResponse(true);
    append({
      role: "user",
      content:
        "Please give me the location of AITalks 2025 and render it out in an address format."
    });
  };

  /**
   * Resets the chat to start a new conversation
   */
  const handleNewChat = (): void => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("chatSession");
    }
    
    setMessages([]);
    setShowLanding(true);
  };

  return {
    onFormSubmit,
    handleRetry,
    handleBackClick,
    handleFirstVisitClick,
    handleLocationEventClick,
    handleNewChat,
  };
}