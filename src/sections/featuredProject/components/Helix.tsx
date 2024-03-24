import { useEffect, useState } from "react"
import { generateHelixLine } from "./helixGenerator"
interface Props {
  showSrc: boolean
}
const Helix = ({ showSrc }: Props) => {
  const [frame, setFrame] = useState(0)
  const [helixLines, setHelixLines] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a line and remove the oldest
      setHelixLines((lines) => [
        generateHelixLine(frame),
        ...lines.slice(0, 40),
      ])
      setFrame((frame) => frame + 1)
    }, 60)

    return () => clearInterval(interval)
  }, [frame])

  return (
    <div
      className={
        "overflow-hidden -mt-1 max-h-full select-none pointer-events-none transition-all duration-1000 " +
        (showSrc ? "blur-md opacity-50" : "")
      }
    >
      {helixLines.map((l, i) => (
        <pre key={i} className="flex justify-center">
          {l}
        </pre>
      ))}
    </div>
  )
}

export default Helix
