import { useState } from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function App() {
  const [markdown, setMarkdown] = useState("# Marky - A Markdown Editor")
  return (
    <>
      <main className="w-full h-screen bg-black text-white">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={30}>
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
          </ResizablePanel>
          <ResizableHandle withHandle className="text-black" />
          <ResizablePanel minSize={30}>
            <Preview markdown={markdown} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  )
}

export default App
