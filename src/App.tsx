import AboutMe from "./sections/AboutMe"
import FeaturedProject from "./sections/featuredProject/FeaturedProject"

function App() {
  return (
    <div className="flex sm:flex-row flex-col min-h-full">
      <AboutMe />
      <FeaturedProject />
    </div>
  )
}

export default App
