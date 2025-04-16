import { marked } from "marked";
import React, { memo, useMemo } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Interface for the Token object returned by marked.lexer
 */
interface MarkdownToken {
  raw: string;
  type: string;
  [key: string]: any;
}

/**
 * Props for MemoizedMarkdownBlock component
 */
interface MarkdownBlockProps {
  content: string;
}

/**
 * Props for MemoizedMarkdown component
 */
interface MemoizedMarkdownProps {
  content: string;
  id: string;
}

/**
 * Splits a given markdown string into discrete "blocks" 
 * Each block can be independently memoized for efficient rendering
 * 
 * @param markdown - Raw markdown string to parse
 * @returns Array of markdown block strings
 */
function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown) as MarkdownToken[];
  
  // Each token's `raw` represents the original substring of the markdown
  return tokens.map((token) => token.raw);
}

/**
 * Memoized block-level markdown renderer
 * Only re-renders if the block content changes
 */
const MemoizedMarkdownBlock = memo(
  ({ content }: MarkdownBlockProps) => {
    return (
      <ReactMarkdown
        components={{
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
        }}>
      {content}
    </ReactMarkdown>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the block content changes
    return prevProps.content === nextProps.content;
  }
);

// Set display name for dev tools
MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock";

/**
 * High-level memoized markdown component
 * Splits content into blocks and memo-renders each block independently
 */
const MemoizedMarkdown = memo(
  ({ content, id }: MemoizedMarkdownProps) => {
    // Memoize the block parsing to avoid unnecessary re-computation
    const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

    return (
      <>
        {blocks.map((block, index) => (
          <MemoizedMarkdownBlock 
            content={block} 
            key={`${id}-block_${index}`} 
          />
        ))}
      </>
    );
  }
);

// Set display name for dev tools
MemoizedMarkdown.displayName = "MemoizedMarkdown";

export default MemoizedMarkdown;