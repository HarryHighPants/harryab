import AboutMe from "./AboutMe"
import FeaturedProject from "./FeaturedProject"

function App() {
  return (
    <div className="flex sm:flex-row flex-col min-h-full">
      <AboutMe />
      <FeaturedProject />
    </div>
  )
}

export default App
