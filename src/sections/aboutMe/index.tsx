import Link from "./Links"
import Sentence from "./Sentence"
import SocialLinks from "./SocialLinks"

const AboutMe = () => {
  return (
    <div className="flex-1 p-10 max-h-[100vh] bg-gray-900 text-white lg:p-16">
      <pre className="whitespace-pre-wrap text-[0.5rem] leading-[0.5rem] mb-10 w-min">
        ██╗░░██╗░█████╗░██████╗░██████╗░██╗░░░██╗░█████╗░██████╗
        ██║░░██║██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗██╔══██╗
        ███████║███████║██████╔╝██████╔╝░╚████╔╝░███████║██████╦╝
        ██╔══██║██╔══██║██╔══██╗██╔══██╗░░╚██╔╝░░██╔══██║██╔══██╗
        ██║░░██║██║░░██║██║░░██║██║░░██║░░░██║░░░██║░░██║██████╦╝
        ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝
      </pre>
      <div className="flex flex-col text-pretty gap-5">
        <Sentence>
          Hey! I'm Harry, a software dev in
          <Link
            url="https://www.australia.com/en/places/brisbane-and-surrounds"
            className="hover:text-[#70ec43]"
          >
            Brisbane, Australia
          </Link>
          .
        </Sentence>
        <Sentence>
          I have a passion for solving real-life problems by utilising my
          technical and creative skills.
        </Sentence>
        <Sentence>
          I'm currently a Full Stack Developer at
          <Link
            url="https://www.hindsiteind.com/platform"
            className="text-[#FFE600]"
          >
            HINDSITE Industries
          </Link>{" "}
          leveraging
          <Link url="https://react.dev/" className="hover:text-[#43c3ec]">
            React
          </Link>
          ,
          <Link url="https://reactnative.dev/" className="hover:text-[#43c3ec]">
            React Native
          </Link>{" "}
          and
          <Link url="https://rubyonrails.org/" className="hover:text-[#dc4747]">
            Ruby on Rails
          </Link>
          .
        </Sentence>
      </div>
      <SocialLinks />
    </div>
  )
}

export default AboutMe
