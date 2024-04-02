import { useState } from "react"
import Helix from "./components/Helix"
import FormattedSrcCode from "./components/FormattedSrcCode"

const FeaturedProject = () => {
  const [showSrc, setShowSrc] = useState(false)

  return (
    <div
      className={
        "bg-slate-800 sm:w-[50vw] w-[100vw] sm:absolute sm:inset-0 sm:left-auto max-h-[100vh] sm:max-h-none relative min-h-screen"
      }
    >
      <Helix showSrc={showSrc} />
      <FormattedSrcCode setShowSrc={setShowSrc} />
    </div>
  )
}

export default FeaturedProject
