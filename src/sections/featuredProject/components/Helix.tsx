import { useEffect, useState } from "react"
import { generateHelixLine } from "../helpers/helixGenerator"
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
        "overflow-hidden absolute inset-0 select-none pointer-events-none transition-all duration-1000 m-10 lg:m-16" +
        (showSrc ? " blur-md opacity-80" : "")
      }
    >
      {helixLines.map((l, i) => (
        <pre
          key={i}
          className="flex justify-center first-of-type:text-[#FFE600] text-white -mt-1"
          style={{ opacity: 1 - i * maxLines * 0.001 }}
        >
          {l}
        </pre>
      ))}
    </div>
  )
}

export default Helix
