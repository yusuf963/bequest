import {HTMLAttributes, ReactNode} from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary'
}
export const Button = ({children, variant, ...props}: Props) => {
  return (
    <button
      {...props}
      style={{background: variant === 'primary' ? 'blue' : 'yellow'}}
    >
      {children}
    </button>
  )
}
