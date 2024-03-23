import { useEffect, useState } from "react"
import { generateHelixLine } from "./helixGenerator"
import FeaturedProjectSrc from "./source/FeaturedProjectSrc"

const FeaturedProject = () => {
  const [frame, setFrame] = useState(0)
  const [helixLines, setHelixLines] = useState<string[]>([])
  const [showSrc, setShowSrc] = useState(false)

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
    <div className={"flex-1 bg-slate-800 p-16 h-[100vh] relative"}>
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={() => setShowSrc((show) => !show)}
      />
      <div
        className={
          "overflow-hidden -mt-1 max-h-full select-none pointer-events-none " +
          (showSrc ? "blur-md opacity-50" : "")
        }
      >
        {helixLines.map((l) => (
          <pre className="flex justify-center">{l}</pre>
        ))}
      </div>
      {showSrc && <FeaturedProjectSrc />}
    </div>
  )
}

export default FeaturedProject
