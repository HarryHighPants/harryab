import { useEffect, useState } from "react"
import { generateHelixLine } from "./helixGenerator"
interface Props {
  showSrc: boolean
}

const targetFps = 16
const msPerFrame = 1000 / targetFps
const maxLines = 35

const Helix = ({ showSrc }: Props) => {
  const [helixLines, setHelixLines] = useState<string[]>([])

  useEffect(() => {
    const addNewLine = (ms: number) => {
      frameId = requestAnimationFrame(addNewLine)
      if (ms - lastNewLineTimeMs < msPerFrame) return

      // Add a line and remove the oldest
      setHelixLines((lines) => [
        generateHelixLine(ms / msPerFrame),
        ...lines.slice(0, maxLines),
      ])
      lastNewLineTimeMs = ms
    }
    let lastNewLineTimeMs = 0
    let frameId = requestAnimationFrame(addNewLine)

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      className={
        "overflow-hidden -mt-1 h-full select-none pointer-events-none transition-all duration-1000 " +
        (showSrc ? "blur-md opacity-80" : "")
      }
    >
      {helixLines.map((l, i) => (
        <pre
          key={i}
          className="flex justify-center first-of-type:text-red-400"
          style={{ opacity: 1 - i * maxLines * 0.001 }}
        >
          {l}
        </pre>
      ))}
    </div>
  )
}

export default Helix
