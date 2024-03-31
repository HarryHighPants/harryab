import AboutMe from "./sections/aboutMe"
import FeaturedProject from "./sections/featuredProject"

function App() {
  return (
    <div className="flex sm:flex-row flex-col min-h-full">
      <AboutMe />
      <FeaturedProject />
    </div>
  )
}

export default App
