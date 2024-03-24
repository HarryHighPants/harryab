import { useState } from "react"
import FeaturedProjectSrc from "./components/formattedSrc"
import Helix from "./components/Helix"

const FeaturedProject = () => {
  const [showSrc, setShowSrc] = useState(false)

  return (
    <div className={"flex-1 bg-slate-800 p-16 h-[100vh] relative"}>
      <div className="absolute inset-0 cursor-pointer" />
      <Helix showSrc={showSrc} />
      <FeaturedProjectSrc setShowSrc={setShowSrc} />
    </div>
  )
}

export default FeaturedProject
