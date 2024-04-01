import { ReactNode } from "react"

const Sentence = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row">
    <p className="absolute -ml-5">{`>`}</p>
    <p>{children}</p>
  </div>
)
export default Sentence
