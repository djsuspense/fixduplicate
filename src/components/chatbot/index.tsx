import { useChat } from "@ai-sdk/react"
import React, { FC, useCallback, useEffect, useState } from "react"
import {
  ChatbotHeader,
  ChatInputForm,
  ChatMessages,
  LandingView,
} from "./chatbot"
import './chatbot.css'
import styles from "./chatbot.module.css"
import { getChatbotHandlers } from "./handlers"
import MobileAssistanceButton from "./mobileAssistanceButton"
import { loadMessagesFromStorage, saveMessagesToStorage, scrollToBottom } from "./utils"

interface ChatbotProps {
  open: boolean
  onClose: () => void
  onOpen: () => void
}

/**
 * Main Chatbot component that orchestrates the entire chat system
 */
const Chatbot: FC<ChatbotProps> = ({ open, onClose, onOpen }) => {
  // State management
  const [initialMessages, setInitialMessages] = useState<any[]>([])
  const [showLanding, setShowLanding] = useState(true)
  const [isLoadingResponse, setIsLoadingResponse] = useState(false)
  const [lastUserInput, setLastUserInput] = useState("")
  const api = process.env.ASSISTANT_ENDPOINT

  // Load previous messages on initial render
  useEffect(() => {
    const loaded = loadMessagesFromStorage()
    setInitialMessages(loaded)
    
    if (loaded.length > 0) {
      setShowLanding(false)
    }
  }, [])

  // Handle escape key press to close chatbot
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [open, onClose])

  // Initialize chat with AI SDK
  const { 
    messages, 
    setMessages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    status, 
    reload, 
    append 
  } = useChat({
    initialInput: "",
    api,
    experimental_throttle: 50,
    initialMessages,
    onFinish: () => setIsLoadingResponse(false),
    onError: () => setIsLoadingResponse(false),
  });

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMessagesToStorage(messages)
      scrollToBottom()
    }
  }, [messages])

  // Get handler functions
  const {
    onFormSubmit,
    handleRetry,
    handleFirstVisitClick,
    handleLocationEventClick,
    handleNewChat,
  } = getChatbotHandlers({
    append,
    input,
    setShowLanding,
    setIsLoadingResponse,
    handleSubmit,
    handleInputChange,
    showLanding,
    setLastUserInput,
    lastUserInput,
    messages,
    setMessages,
    reload
  })

  // Scroll to bottom on initial render
  useEffect(() => {
    scrollToBottom()
  }, [])  

  // Generate CSS class names for overlay and container based on open state
  const overlayClassName = open
    ? styles.chatbotOverlay
    : `${styles.chatbotOverlay} ${styles.hiddenOverlay}`;

  const containerClassName = open
    ? styles.chatbotContainer
    : `${styles.chatbotContainer} ${styles.hiddenChatbotContainer}`;

    return (
      <>
        <div
          className={overlayClassName}
          onClick={onClose}
        >
          <div
            className={containerClassName}
            onClick={e => e.stopPropagation()}
          >
            <ChatbotHeader
              onClose={onClose}
              onNewChat={handleNewChat}
            />
            <div className={styles.chatContainer}>
              {showLanding ? (
                <LandingView
                  onFirstVisit={handleFirstVisitClick}
                  onLocationClick={handleLocationEventClick}
                />
              ) : (
                <ChatMessages
                  messages={messages}
                  onRetry={handleRetry}
                  isAssistantThinking={isLoadingResponse}
                  showLanding={showLanding}
                />
              )}
              <ChatInputForm
                input={input}
                onChange={handleInputChange}
                onSubmit={onFormSubmit}
                isLoading={isLoadingResponse}
              />
            </div>
            <div className={styles.status}>Status: {status}</div>
          </div>
        </div>
        
        {/* Mobile Assistance Button */}
        {!open && <MobileAssistanceButton onClick={onOpen} />}
      </>
    )
}

export default Chatbot