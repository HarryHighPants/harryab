import helixPoemHtml from "./helixPoemHtml"
const FeaturedProjectSrc = () => {
  return (
    <div className="absolute inset-0 p-16 pointer-events-none">
      <div className="relative flex">
        <div
          className="m-auto pointer-events-auto cursor-text p-2"
          dangerouslySetInnerHTML={{ __html: helixPoemHtml }}
        />
      </div>
    </div>
  )
}

export default FeaturedProjectSrc
