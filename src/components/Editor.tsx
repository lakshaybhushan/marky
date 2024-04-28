interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

export default function Editor({ markdown, setMarkdown }: EditorProps) {
  return (
    <div className="overflow-y-hidden border border-r-2 border-gray-700">
      {/* <div className="w-full bg-gray-950 p-3 uppercase text-gray-400 tracking-widest">
        Markdown
      </div> */}
      <textarea
        className="w-full h-screen overflow-y-scroll outline-none bg-transparent p-6"
        onChange={(e) => setMarkdown(e.target.value)}>
        {markdown}
      </textarea>
    </div>
  );
}
