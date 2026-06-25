interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = 'typescript' }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-[#E2D9C8]">
      <div className="bg-[#2A2723] px-4 py-2 text-xs text-[#8A8A80] font-mono">
        {language}
      </div>
      <pre className="bg-[#1F2421] p-4 overflow-x-auto">
        <code className="text-sm text-[#F6F1E8] font-mono leading-relaxed">
          {children}
        </code>
      </pre>
    </div>
  );
}
