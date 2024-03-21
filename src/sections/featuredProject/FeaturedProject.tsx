import { useEffect, useState } from "react"
import { generateHelixLine } from "./codePoem"

const FeaturedProject = () => {
  const [frame, setFrame] = useState(0)
  const [helixLines, setHelixLines] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a line and remove the oldest
      setHelixLines((lines) => [
        generateHelixLine(frame),
        ...lines.slice(0, 20),
      ])
      setFrame((frame) => frame + 1)
    }, 60)

    return () => clearInterval(interval)
  }, [frame])

  return (
    <div className="flex-1 bg-slate-800 p-4">
      {helixLines.map((l) => (
        <pre className="flex justify-center">{l}</pre>
      ))}
    </div>
  )
}

export default FeaturedProject
