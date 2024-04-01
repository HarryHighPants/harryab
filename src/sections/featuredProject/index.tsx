import { useState } from "react"
import FeaturedProjectSrc from "./components/formattedSrc"
import Helix from "./components/Helix"

const FeaturedProject = () => {
  const [showSrc, setShowSrc] = useState(false)

  return (
    <div
      className={
        "bg-slate-800 p-10 h-[100vh] sm:w-[50vw] w-[100vw] relative lg:p-16"
      }
    >
      <Helix showSrc={showSrc} />
      <FeaturedProjectSrc setShowSrc={setShowSrc} />
    </div>
  )
}

export default FeaturedProject
