const AboutMe = () => {
  return (
    <div className="flex-1 p-16 max-h-[100vh] bg-gray-900 text-white">
      <h1>Hey</h1>
      <p>
        I'm Harry AB a software dev in Brisbane, Australia. I have a passion for
        solving real-life problems by utilising my technical and creative
        skills.
      </p>
      <div className="flex flex-row h-6 justify-center gap-4 mt-12">
        <a
          href="https://github.com/harryhighpants"
          target="_blank"
          className="hover:opacity-80"
        >
          <img src="/github.png" alt="Github logo" className="max-h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/harrison-armitage-bath-8862b4116/"
          target="_blank"
          className="hover:opacity-80"
        >
          <img src="/linkedin.png" alt="Linkedin logo" className="max-h-full" />
        </a>
      </div>
    </div>
  )
}

export default AboutMe
