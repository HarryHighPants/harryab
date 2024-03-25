import { useState } from "react"
import FeaturedProjectSrc from "./components/formattedSrc"
import Helix from "./components/Helix"

const FeaturedProject = () => {
  const [showSrc, setShowSrc] = useState(false)

  return (
    <div
      className={"bg-slate-800 p-16 h-[100vh] sm:w-[50vw] w-[100vw] relative"}
    >
      <Helix showSrc={showSrc} />
      <FeaturedProjectSrc setShowSrc={setShowSrc} />
    </div>
  )
}

export default FeaturedProject
