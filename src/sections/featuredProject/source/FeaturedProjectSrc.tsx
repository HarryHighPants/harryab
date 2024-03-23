import HelixPoemSrc from "./helixPoem"
import "highlight.js/styles/github-dark-dimmed.css"
import CodeBlock from "./CodeBlock"

const FeaturedProjectSrc = () => {
  return (
    <div className="absolute bg-black/50 inset-0 p-16">
      <div className="overflow-hidden -mt-1 max-h-full">
        <CodeBlock
          language="javascript"
          code={HelixPoemSrc}
          className="text-sm -mt-5"
        />
      </div>
    </div>
  )
}

export default FeaturedProjectSrc
