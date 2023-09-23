import { marked } from "marked";
import DOMPurify from "dompurify";
interface PreviewProps {
  markdown: string;
}

export default function Preview({ markdown }: PreviewProps) {
  const parsed = DOMPurify.sanitize(marked.parse(markdown));
  return (
    <div className="overflow-y-hidden">
      <div className="w-full bg-gray-950 p-3 uppercase text-gray-400 tracking-widest">
        Preview
      </div>
      <div
        className="overflow-y-scroll p-6 prose prose-invert prose-a:text-cyan-300"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />



    </div>
  );
}
