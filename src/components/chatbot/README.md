Chatbot Component
=================

This folder houses a configurable chatbot built with **Gatsby** and **React**, leveraging @ai-sdk/react to handle AI-driven conversation. Below is an overview of how everything works, how it’s structured, and what each piece of code is responsible for.

Overview
--------

This chatbot allows users to converse with an AI assistant right on your site. It has a **Landing View** for first impressions or “suggested prompts” and then transitions to a full chat interface once the user starts interacting. The conversation history can be saved to localStorage so that refreshing the page, or returning at a later time, won’t reset the chat.

### Key Features

1.  **Landing Screen**: Greets users with a starting UI and some call-to-action prompts or suggested questions.
    
2.  **Chat Interface**: Once the user starts interacting, the chatbot displays an ongoing back-and-forth conversation.
    
3.  **AI Integration**: Utilizes the useChat hook from @ai-sdk/react for sending prompts to your AI backend (defined by process.env.ASSISTANT\_ENDPOINT).
    
4.  **Local Storage Persistence**: Saves chat history to localStorage and loads it back when the user revisits or refreshes the page.
    
5.  **Responsive & Stylish**: It’s styled with a custom CSS module (chatbot.module.css) to give a polished UI that fits many design needs.
    

Files in This Folder
--------------------

File NameDescription**index.tsx**Main Chatbot component that orchestrates the entire chat system. It manages local UI states, initializes the AI chat, and renders child components. Also includes logic to show/hide the landing view, handle user input, and handle page overlays.**chatbot.tsx**Collection of smaller presentational subcomponents (Header, LandingView, ChatMessages, ChatInputForm). This file gathers them all in one place. Each subcomponent is self-contained and focuses on displaying a specific part of the chatbot UI.**chatbot.module.css**The CSS module file that controls the styling and layout of the chatbot. It scopes the styling to ensure there are no global collisions.**memoized-markdown.tsx**A specialized component for rendering markdown in a performant, memoized way. It uses react-markdown and marked to parse and render blocks of markdown efficiently (important for chats that can become large).**handlers.ts**Contains helper functions that define how certain events should be handled (e.g., form submission, back button clicks, custom alerts for special button clicks). It keeps index.tsx less cluttered.

File-by-File Deep Dive
----------------------

### index.tsx (Main Entry)

1.  **Imports** relevant React hooks and subcomponents.
    
2.  **Loads** previous messages from localStorage (if any) to restore chat state.
    
3.  **Uses** the useChat hook from @ai-sdk/react. The hook’s returned messages, input, and handleSubmit are used to display and manage the user’s conversation.
    
4.  **Sets** up UI states:
    
    *   showLanding: Whether to show the Landing View or not.
        
    *   isLoadingResponse: Whether the AI assistant is actively responding.
        
    *   open: Whether the chatbot is currently displayed or hidden.
        
5.  **Wraps** everything in a styled container that can fade in/out.
    
6.  **Passes** the relevant states and callbacks (like onFormSubmit) down to subcomponents.
    

> **Key takeaway**: This file is the “brain” of the Chatbot UI. It manages high-level states, events, and transitions.

### chatbot.tsx (Subcomponents)

*   **ChatbotHeader**: Displays the top bar with the logo, close button, and optional back arrow.
    
*   **LandingView**: Renders an initial UI for new or returning users, with suggested prompts.
    
*   **ChatMessages**: Lists out the conversation messages (both user and AI) in a scrollable area. Shows a loading icon while the assistant is processing.
    
*   **ChatInputForm**: Handles the user’s text input and the send button, including a minimal loading spinner for the send button.
    

> **Key takeaway**: These subcomponents keep your UI organized and modular, each focusing on a distinct part of the chatbot interface.

### chatbot.module.css

A CSS module for styling. This file contains:

*   **Layout** rules for the overall chatbot overlay and container.
    
*   **Positioning** and styling for the header, close button, back button, etc.
    
*   **Message** bubbles for both user and assistant messages (including markdown-based messages).
    
*   **Landing** page styling for the initial prompts.
    
*   **Input** form design, including a custom send button icon.
    

> **Key takeaway**: All Chatbot styling is encapsulated here, ensuring minimal interference with the rest of your site’s styling.

### memoized-markdown.tsx

A specialized React component for splitting a markdown string into discrete “blocks,” then memoizing the rendering of each block. This means if you have a large conversation with complex or lengthy markdown responses, only the pieces that change will re-render, improving performance.

*   **parseMarkdownIntoBlocks**: Uses the marked library to tokenize the markdown into separate blocks of text.
    
*   **MemoizedMarkdownBlock**: Renders one block via ReactMarkdown and only re-renders if the block content changes.
    
*   **MemoizedMarkdown**: Wraps the whole message content, splitting it into blocks and rendering them in a loop with the memoized block component.
    

> **Key takeaway**: This file optimizes markdown rendering, which can be resource-heavy.

### handlers.ts

Contains plain JavaScript/TypeScript functions that define event handlers for the chatbot.

*   **onFormSubmit**: Manages the user’s attempt to send a message. Checks that the input isn’t empty, hides the landing view, sets loading states, and invokes handleSubmit from useChat.
    
*   **handleBackClick**: Toggles the landing view if the user clicks the back arrow (if you allow them to jump back to the prompt suggestions).
    
*   **handleFirstVisitClick / handleLocationEventClick**: Example handlers that currently pop up an alert, but can be expanded or replaced with real logic.
    

> **Key takeaway**: Separating out event-handling logic here helps keep index.tsx clean and easy to follow.

Usage
-----

1.  **Import** the Chatbot component in your Gatsby page or layout.
    
2.  tsxCopyEditimport React, { useState } from "react"import Chatbot from "../components/chatbot"const SomePage = () => { const \[chatOpen, setChatOpen\] = useState(false) return (
    
    setChatOpen(true)}>Open AI Chat setChatOpen(false)} />
    
    )}export default SomePage
    
3.  **Configure** your AI endpoint using the ASSISTANT\_ENDPOINT environment variable in .env.
    
4.  **(Optional) Customize** the LandingView prompts and the handlers in handlers.ts to suit your conversation needs.
    
5.  **Build & Deploy**. Once you run your Gatsby build, you can test the chatbot in a browser. If configured properly, chat messages will be saved to localStorage so refreshing the page won’t reset the conversation.
    

Local Storage Persistence
-------------------------

By default, the chatbot attempts to store conversations in the browser’s localStorage under a key like "chatSession". If you want to clear or reset it at any point, you can simply remove that item from localStorage:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsCopyEditif (typeof window !== "undefined") {    window.localStorage.removeItem("chatSession")  }   `

Or you could add a “Clear Chat” button in your UI that triggers the same logic.

Troubleshooting & Tips
----------------------

1.  **AI Endpoint Not Working**: Make sure you have process.env.ASSISTANT\_ENDPOINT set in your environment and that your @ai-sdk/react configuration is correct.
    
2.  **Chat Not Displaying**: If the chatbot doesn’t show up, ensure you’re controlling open properly in your parent component and that you haven’t hidden it with CSS.
    
3.  **Local Storage**: If messages aren’t persisting, check your console for warnings or errors regarding JSON parse/stringify.
    
4.  **Styling Conflicts**: If you see unexpected styles, double-check that your Gatsby setup is properly handling CSS modules.
    

Contributing
------------

1.  **Clone** or download the repository that contains this folder.
    
2.  bashCopyEditgit checkout -b feature/your-awesome-improvement
    
3.  bashCopyEditgit commit -m "Add new feature or fix bug"
    
4.  **Submit a PR** so that your updates can be reviewed and merged.
    

License
-------

Check the main repository’s license (e.g., MIT, Apache, etc.) to confirm usage and distribution rights for this component. If not specified, please consult the repository owner or maintainers.