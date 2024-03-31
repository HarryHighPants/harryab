import { ReactNode } from "react"

const Sentence = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row">
    <p className="mr-3">{`>`}</p>
    {children}
  </div>
)
export default Sentence
