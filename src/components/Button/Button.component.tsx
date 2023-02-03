import { ButtonProps } from './Button.interfaces'
import './Button.styles.css'

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  content,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${className} button--${size} button--${variant} button`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  )
}
