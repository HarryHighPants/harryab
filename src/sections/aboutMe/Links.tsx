import { ReactNode } from "react"

interface Props {
  url: string
  children: ReactNode
  className?: string
}
const Link = ({ url, children, className }: Props) => {
  return (
    <>
      {" "}
      <a
        className={`hover:italic hover:underline ${className}`}
        href={url}
        target="_blank"
      >
        {children}
      </a>
    </>
  )
}

export default Link
