import helixPoemHtml from "./formattedSrcHtml"

interface Props {
  setShowSrc: (value: boolean) => void
}
const FeaturedProjectSrc = ({ setShowSrc }: Props) => {
  return (
    <div className="absolute inset-0 p-16">
      <div className="relative flex">
        <div
          className="m-auto p-2 hover:opacity-100 opacity-0 transition-opacity cursor-pointer duration-1000"
          onMouseEnter={() => setShowSrc(true)}
          onMouseLeave={() => setShowSrc(false)}
          onClick={() =>
            window.open(
              "https://codepen.io/Harrison-Armitage-Bath/pen/rNbmXym?editors=0012",
              "_blank"
            )
          }
          dangerouslySetInnerHTML={{ __html: helixPoemHtml }}
        />
      </div>
    </div>
  )
}

export default FeaturedProjectSrc
