import Tippy from "@tippyjs/react";
import Lottie from "lottie-react";
import React, { FC, useEffect, useRef } from "react";
import { BsArrowRepeat, BsArrowUp, BsCheckCircleFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { RiChat3Fill } from "react-icons/ri";
import chatLoadingAnimation from "./bubbles.json";
import styles from "./chatbot.module.css";
import MemoizedMarkdown from "./memoized-markdown";

// Types
type IconProps = React.FC<React.SVGProps<SVGSVGElement>>;
type Message = {
  id: string;
  role: string;
  content: string;
  annotations?: Array<{ filename: string }>;
};

// Constants
const TOOLTIP_Z_INDEX = 999999999;

// Icon Renaming for clarity
const CheckCircle = BsCheckCircleFill as IconProps;
const UpArrow = BsArrowUp as IconProps;
const Retry = BsArrowRepeat as IconProps;
const Close = IoCloseOutline as IconProps;
const ChatOutline = RiChat3Fill as IconProps;

/**
 * ChatbotHeader component - Renders the top bar with logo, new chat and close buttons
 */
interface ChatbotHeaderProps {
  onClose: () => void;
  onNewChat: () => void;
}

export const ChatbotHeader: FC<ChatbotHeaderProps> = ({ onClose, onNewChat }) => (
  <div className={styles.header}>
    <a href="/" target="_blank" rel="noreferrer">
      <img
        src="https://cdn.ems.prod.upgather.com/uploads/aiweek_2b65083237.svg"
        alt="AIWeek"
        className={styles.logoLanding}
      />
    </a>
    <div className={styles.buttonsContainer}>
      <Tippy content="Start a new chat session" zIndex={TOOLTIP_Z_INDEX}>
        <button className={styles.newChatButton} onClick={onNewChat}>
          <ChatOutline />
        </button>
      </Tippy>
      <span className={styles.headerDivider}>|</span>
      <Tippy content="Close Chat" zIndex={TOOLTIP_Z_INDEX}>
        <button className={styles.closeButton} onClick={onClose}>
          <Close />
        </button>
      </Tippy>
    </div>
  </div>
);

/**
 * LandingView component - Initial screen shown to users with prompt suggestions
 */
interface LandingViewProps {
  onFirstVisit: () => void;
  onLocationClick: () => void;
}

export const LandingView: FC<LandingViewProps> = ({ onFirstVisit, onLocationClick }) => (
  <div className={styles.landing}>
    <div className={styles.landingContent}>
      <h2 className={styles.landingTitle}>How can I help you today?</h2>
      <p className={styles.landingP}>
      AI Assistance is a powerful AI tool built by SNG that helps you experience to find the information that you need!
        <br />
        <b>Not sure what to ask? Try a suggested prompt below</b>
      </p>
    </div>
    <div className={styles.landingButtonContainer}>
      <button className={styles.landingButton} onClick={onFirstVisit}>
        <h4>
          <CheckCircle /> First Time Visitor
        </h4>
        <p>
          Gathering of researchers, developers, business leaders, and
          enthusiasts focused on artificial intelligence.
        </p>
      </button>
      <button className={styles.landingButton} onClick={onLocationClick}>
        <h4>
          <CheckCircle /> Location of the event
        </h4>
        <p>
          Event supporting various AI initiatives, including AI for Good: Ocean
          Day, AI Computing Forum, and AI Venture Forum, offering insights,
          knowledge sharing, and networking at scale
        </p>
      </button>
    </div>
  </div>
);

/**
 * ChatMessages component - Displays the conversation between user and assistant
 */
interface ChatMessagesProps {
  messages: Message[];
  isAssistantThinking: boolean;
  showLanding: boolean;
  onRetry: () => void;
}

export const ChatMessages: FC<ChatMessagesProps> = ({ 
  messages, 
  isAssistantThinking, 
  showLanding, 
  onRetry 
}) => {
  // AnnotationLinks component - Displays links to resources
  interface Annotation {
    filename: string;
  }
  
  interface AnnotationLinksProps {
    annotations?: Annotation[];
  }
  
  const AnnotationLinks: React.FC<AnnotationLinksProps> = ({ annotations }) => {
    if (!annotations || annotations.length === 0) return null;
  
    const prefix = process.env.ASSISTANT_ENDPOINT;
  
    return (
      <div className={styles.annotationLinks}>
        Links
        {annotations.map((annotation, index) => {
          const url = annotation.filename;
          return url ? (
            <Tippy key={index} content="Open resource link" zIndex={TOOLTIP_Z_INDEX}>
              <a
                href={`${prefix}/${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.annotationLinkButton}
              >
                {index + 1}
              </a>
            </Tippy>
          ) : null;
        })}
      </div>
    );
  };

  // Return ChatMessages with Memoization for performance optimization
  return (
  <div id="chatMessages" className={styles.messages}>
    {!showLanding && (
      <>
        {messages.map((msg) => {
          const isAssistant = msg.role === "assistant";
          return (
            <div
              key={msg.id}
              className={
                isAssistant ? styles.assistantMessage : styles.userMessage
              }
            >
              {isAssistant ? (
                <>
                  <MemoizedMarkdown id={msg.id} content={msg.content} />
                  {/* <AnnotationLinks annotations={msg.annotations} /> */}
                </>
              ) : (
                msg.content
              )}
            </div>
          );
        })}

        {isAssistantThinking && (
          <div className={styles.assistantMessage}>
            <Lottie
              animationData={chatLoadingAnimation}
              loop
              autoplay
              className={styles.loadingIcon}
            />
          </div>
        )}

        {!isAssistantThinking && messages.length > 0 && (
          <Tippy content="Retry Chat" zIndex={TOOLTIP_Z_INDEX}>
            <div className={styles.retryContainer}>
              <button className={styles.retryButton} onClick={onRetry}>
                <Retry className={styles.retryIcon} />
              </button>
            </div>
          </Tippy>
        )}
      </>
    )}
  </div>
)};

/**
 * ChatInputForm component - Handles user input and submission
 */
interface ChatInputFormProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const ChatInputForm: FC<ChatInputFormProps> = ({ 
  input, 
  onChange, 
  onSubmit, 
  isLoading 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isKKey = e.key === 'k' || e.key === 'K';
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (isCmdOrCtrl && isKKey) {
        e.preventDefault(); // prevent browser's default find-in-page
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
    <form onSubmit={onSubmit} className={styles.chatForm}>
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        value={input}
        onChange={onChange}
        placeholder="How can I help you today? (⌘K or Ctrl+K)"
        className={styles.chatInput}
        disabled={isLoading}
        />
      <Tippy content="Submit Chat" zIndex={TOOLTIP_Z_INDEX}>
        <button 
          type="submit" 
          className={styles.inlineSendButton}
          disabled={isLoading || !input.trim()}
          >
          {isLoading ? (
            <div className={styles.spinner} />
          ) : (
            <UpArrow className={styles.upArrow} />
          )}
        </button>
      </Tippy>      
    </div>
  </form>
  <div className={styles.disclosureText}>
    Assistant can make mistakes. Check important info.
  </div>
</>
)
};