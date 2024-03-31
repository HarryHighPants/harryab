import Sentence from "./Sentence"
import SocialLinks from "./SocialLinks"

const AboutMe = () => {
  return (
    <div className="flex-1 p-16 max-h-[100vh] bg-gray-900 text-white">
      <h1 className="text-2xl mb-2">Hey</h1>
      <div className="flex flex-col">
        <Sentence>
          <p>{`I'm Harry AB a software dev in Brisbane, Australia.`}</p>
        </Sentence>
        <Sentence>
          <p>{`I have a passion for solving real-life problems by utilising my
        technical and creative skills.`}</p>
        </Sentence>
      </div>
      <SocialLinks />
    </div>
  )
}

export default AboutMe
