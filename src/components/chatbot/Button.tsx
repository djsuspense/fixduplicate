import React, { FC } from "react"

interface ButtonProps {
  className?: string
  onClick: () => void
}

const Button: FC<ButtonProps> = props => (
  <a
    className={`aichatbot navigation2021-module--navwidetop21--2lkgz ${props.className}`}
    onClick={props.onClick}
  >
    <span className="aigreen">A</span>
    ss
    <span className="aigreen">I</span>
    stance
  </a>
)

export default Button
