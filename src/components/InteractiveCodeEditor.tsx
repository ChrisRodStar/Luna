"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  className?: string;
}

type TabType = "html" | "css" | "js";

const InteractiveCodeEditor = ({ className = "" }: CodeEditorProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("html");
  const [showPreview, setShowPreview] = useState(false);
  const [htmlCode, setHtmlCode] = useState(`<div class="p-8 text-center">
  <h1 class="text-3xl font-bold text-blue-600 mb-4">
    Hello, Luna! 🌙
  </h1>
  <p class="text-gray-600 mb-6">
    Welcome to your coding journey!
  </p>
  <button class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600" onclick="celebrate()">
    Start Learning
  </button>
</div>`);

  const [cssCode, setCssCode] = useState(`/* Tailwind CSS is already included! 
   Try changing colors like:
   - text-blue-600 to text-red-600
   - bg-purple-500 to bg-green-500
   
   Or add your own custom styles below: */

body {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}`);

  const [jsCode, setJsCode] = useState(`// Welcome to Luna! 🌙

function celebrate() {
  const button = document.querySelector('button');
  
  // Change the button text
  button.textContent = 'You did it! 🎉';
  
  // Change the button color
  button.className = 'bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600';
  
  // Show a message
  alert('🌙 Great job! You just ran your first code!');
}

console.log('Hello from Luna! 🌙');`);

  const [previewHtml, setPreviewHtml] = useState("");

  // Update preview when code changes
  useEffect(() => {
    // Sanitize HTML to prevent broken structure
    const sanitizeHtml = (html: string) => {
      // If HTML looks incomplete or broken, wrap it safely
      const trimmedHtml = html.trim();
      if (!trimmedHtml) return "<p>Start typing HTML...</p>";

      // Check for common incomplete tags
      if (trimmedHtml.match(/<[^>]*$/)) {
        return `<p style="color: #64748b; font-style: italic;">Continue typing your HTML tag...</p>`;
      }

      return html;
    };

    const safeHtmlCode = sanitizeHtml(htmlCode);

    const combinedHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { 
              font-family: Inter, sans-serif; 
              background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
              margin: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            ${cssCode}
          </style>
        </head>
        <body>
          ${safeHtmlCode}
          <script>
            try {
              ${jsCode}
            } catch(e) {
              console.log('JS Error:', e);
            }
          </script>
        </body>
      </html>
    `;
    setPreviewHtml(combinedHtml);
  }, [htmlCode, cssCode, jsCode]);

  const getCurrentCode = () => {
    switch (activeTab) {
      case "html":
        return htmlCode;
      case "css":
        return cssCode;
      case "js":
        return jsCode;
      default:
        return htmlCode;
    }
  };

  const setCurrentCode = (code: string) => {
    switch (activeTab) {
      case "html":
        setHtmlCode(code);
        break;
      case "css":
        setCssCode(code);
        break;
      case "js":
        setJsCode(code);
        break;
    }
  };

  const getLanguage = () => {
    switch (activeTab) {
      case "html":
        return "html";
      case "css":
        return "css";
      case "js":
        return "javascript";
      default:
        return "html";
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCurrentCode(value);
    }
  };

  const handleEditorDidMount = (_editor: any, monaco: any) => {
    // Define Luna theme for Monaco Editor
    monaco.editor.defineTheme("luna-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "64748b" },
        { token: "keyword", foreground: "a78bfa" },
        { token: "string", foreground: "34d399" },
        { token: "number", foreground: "fbbf24" },
        { token: "tag", foreground: "60a5fa" },
        { token: "attribute.name", foreground: "34d399" },
        { token: "attribute.value", foreground: "fbbf24" },
        { token: "delimiter.html", foreground: "64748b" },
        { token: "key", foreground: "60a5fa" },
        { token: "value", foreground: "34d399" },
      ],
      colors: {
        "editor.background": "#0f172a",
        "editor.foreground": "#e2e8f0",
        "editorLineNumber.foreground": "#64748b",
        "editorLineNumber.activeForeground": "#94a3b8",
        "editor.selectionBackground": "#334155",
        "editor.lineHighlightBackground": "#1e293b",
        "editorCursor.foreground": "#8b5cf6",
        "editor.selectionHighlightBackground": "#334155",
        "editorBracketMatch.background": "#334155",
        "editorBracketMatch.border": "#8b5cf6",
      },
    });

    // Set the theme
    monaco.editor.setTheme("luna-dark");
  };

  const resetCode = () => {
    setActiveTab("html");
    setHtmlCode(`<div class="p-8 text-center">
  <h1 class="text-3xl font-bold text-blue-600 mb-4">
    Hello, Luna! 🌙
  </h1>
  <p class="text-gray-600 mb-6">
    Welcome to your coding journey!
  </p>
  <button class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600" onclick="celebrate()">
    Start Learning
  </button>
</div>`);
    setCssCode(`/* Tailwind CSS is already included! 
   Try changing colors like:
   - text-blue-600 to text-red-600
   - bg-purple-500 to bg-green-500
   
   Or add your own custom styles below: */

body {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}`);
    setJsCode(`// Welcome to Luna! 🌙

function celebrate() {
  const button = document.querySelector('button');
  
  // Change the button text
  button.textContent = 'You did it! 🎉';
  
  // Change the button color
  button.className = 'bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600';
  
  // Show a message
  alert('🌙 Great job! You just ran your first code!');
}

console.log('Hello from Luna! 🌙');`);
  };

  return (
    <div className={`relative w-full max-w-none ${className}`}>
      {/* Floating Code Elements Background - works across devices */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating dots with Luna theme colors */}
        <div className="absolute top-4 right-8 w-3 h-3 bg-accent rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-16 left-4 w-2 h-2 bg-primary rounded-full opacity-40 float-animation-delayed"></div>
        <div className="absolute bottom-8 right-4 w-4 h-4 bg-white rounded-full opacity-30 float-animation-slow"></div>
        <div className="absolute bottom-16 left-8 w-2 h-2 bg-accent rounded-full opacity-50 float-animation"></div>
        <div className="absolute top-1/2 right-2 w-1 h-1 bg-primary rounded-full opacity-60 float-animation-delayed"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 float-animation-slow"></div>

        {/* Floating Code Snippets - responsive sizing */}
        <div className="absolute top-8 left-8 sm:left-12 text-xs sm:text-sm text-white/20 font-mono float-animation">
          &lt;div&gt;
        </div>
        <div className="absolute bottom-12 right-8 sm:right-12 text-xs sm:text-sm text-white/20 font-mono float-animation-delayed">
          {}
        </div>
        <div className="absolute top-1/3 left-2 text-xs sm:text-sm text-white/20 font-mono float-animation-slow">
          =&gt;
        </div>
        <div className="absolute bottom-1/3 right-6 text-sm text-white/15 font-mono float-animation">
          🌙
        </div>
        <div className="absolute top-2/3 left-6 text-sm text-white/15 font-mono float-animation-delayed">
          ✨
        </div>
        <div className="absolute top-1/4 right-1/4 text-xs text-white/10 font-mono float-animation-slow">
          const
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-xs text-white/10 font-mono float-animation">
          ()
        </div>
      </div>

      {/* Main Editor Container */}
      <div className="bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden relative z-10">
        {/* Editor Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-400 text-sm ml-3">
              {activeTab === "html"
                ? "index.html"
                : activeTab === "css"
                ? "styles.css"
                : "script.js"}
            </span>
          </div>
          <div className="text-xs text-slate-500">Luna Code Editor</div>
        </div>

        {/* Editor Tabs - enhanced styling */}
        <div className="flex bg-slate-800 border-b border-slate-700">
          {(["html", "css", "js"] as TabType[]).map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 sm:flex-none px-6 py-3 text-sm font-medium transition-all duration-200 min-h-[44px] sm:min-h-auto flex items-center justify-center gap-2 ${
                index < 2 ? "border-r border-slate-700" : ""
              } ${
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50 active:bg-slate-600"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  tab === "html"
                    ? "bg-orange-500"
                    : tab === "css"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
              ></span>
              {tab.toUpperCase()}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile-first responsive layout */}
        <div className="flex flex-col">
          {/* Monaco Editor Section - only show when not in preview mode */}
          {!showPreview && (
            <div className="flex-1">
              <div className="h-[280px] lg:h-[900px]">
                <Editor
                  height="100%"
                  language={getLanguage()}
                  value={getCurrentCode()}
                  onChange={handleEditorChange}
                  onMount={handleEditorDidMount}
                  theme="luna-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    insertSpaces: true,
                    wordWrap: "on",
                    fontFamily: "JetBrains Mono, Consolas, Monaco, monospace",
                    lineHeight: 4,
                    padding: { top: 14, bottom: 14 },
                    scrollbar: {
                      vertical: "auto",
                      horizontal: "auto",
                      verticalScrollbarSize: 8,
                      horizontalScrollbarSize: 8,
                    },
                    overviewRulerBorder: false,
                    hideCursorInOverviewRuler: true,
                    renderLineHighlight: "line",
                    selectionHighlight: false,
                    occurrencesHighlight: "off",
                    codeLens: false,
                    folding: true,
                    foldingHighlight: false,
                    unfoldOnClickAfterEndOfLine: false,
                    showUnused: false,
                    bracketPairColorization: { enabled: true },
                    autoIndent: "full",
                    formatOnPaste: true,
                    formatOnType: true,
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: "on",
                    tabCompletion: "on",
                    quickSuggestions: {
                      other: true,
                      comments: false,
                      strings: false,
                    },
                    // Mobile optimizations
                    mouseWheelZoom: false,
                    contextmenu: true,
                    links: false,
                    colorDecorators: true,
                    hover: { enabled: true, delay: 300 },
                    parameterHints: { enabled: true },
                    suggest: {
                      showKeywords: true,
                      showSnippets: true,
                    },
                  }}
                  loading={
                    <div className="flex items-center justify-center h-full bg-slate-900 text-white">
                      <div className="text-sm">Loading Luna Editor...</div>
                    </div>
                  }
                />
              </div>
            </div>
          )}

          {/* Live Preview Section - fullscreen when active */}
          {showPreview && (
            <div className="w-full">
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <span className="text-slate-400 text-sm">Live Preview</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-500">Live</span>
                </div>
              </div>
              <div className="relative h-[280px] lg:h-[900px] overflow-hidden">
                <iframe
                  srcDoc={previewHtml}
                  className="w-full h-full border-none"
                  sandbox="allow-scripts allow-same-origin"
                  title="Code Preview"
                />
                {/* Mobile-friendly overlay for better interaction */}
                <div className="absolute inset-0 pointer-events-none lg:hidden bg-gradient-to-t from-white/5 to-transparent"></div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile-friendly action buttons */}
        <div className="bg-slate-800 px-4 py-3 border-t border-slate-700 flex flex-col sm:flex-row gap-3 sm:gap-2 sm:justify-between sm:items-center">
          <div className="flex items-center space-x-2 text-xs text-slate-400 justify-center sm:justify-start">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>
              {showPreview
                ? "Preview active • Edit code to see changes!"
                : "Ready to code • Click Run Code to see preview!"}
            </span>
          </div>
          <div className="flex space-x-2 justify-center sm:justify-end">
            <button
              onClick={() => {
                // Toggle preview visibility
                setShowPreview(!showPreview);
                // Trigger a re-render of the preview
                setPreviewHtml(previewHtml);
              }}
              className="px-4 py-2 text-sm bg-primary hover:bg-primary/90 text-white rounded transition-colors min-h-[44px] sm:min-h-auto flex items-center justify-center font-medium"
            >
              {showPreview ? "← Back to Editor" : "▶ Run Code"}
            </button>
            <button
              onClick={resetCode}
              className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors min-h-[44px] sm:min-h-auto flex items-center justify-center"
            >
              ↻ Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCodeEditor;
