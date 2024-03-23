import { useEffect, useRef } from "react"
import hljs from "highlight.js"
import "./codeBlockStyling.css"

interface Props {
  language: string
  code: string
  className?: string
}

const CodeBlock = ({ language, code, className }: Props) => {
  const codeRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current)
    }
  }, [code])

  return (
    <pre className={className}>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  )
}
export default CodeBlock
