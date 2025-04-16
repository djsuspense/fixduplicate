/**
 * ChatMessage interface representing the structure of chat messages
 */
interface ChatMessage {
  role: string;
  content: string;
  id?: string;
  annotations?: Array<{ filename: string }>;
}

/**
 * Storage key for saving chat messages in localStorage
 */
const STORAGE_KEY = "chatSession";

/**
 * Loads chat messages from localStorage
 * 
 * @returns An array of chat messages or an empty array if none are found
 */
export function loadMessagesFromStorage(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.warn("Error loading messages from storage:", err);
    return [];
  }
}

/**
 * Saves chat messages to localStorage
 * 
 * @param messages - Array of chat messages to save
 */
export function saveMessagesToStorage(messages: ChatMessage[]): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (err) {
    console.warn("Error saving messages to storage:", err);
  }
}

/**
 * Scrolls the chat messages container to the bottom
 * Uses smooth scrolling for better user experience
 */
export function scrollToBottom(): void {
  const el = document.getElementById("chatMessages");
  
  if (el) {
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }
}

/**
 * Clears all chat messages from localStorage
 */
export function clearChatStorage(): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn("Error clearing chat storage:", err);
  }
}